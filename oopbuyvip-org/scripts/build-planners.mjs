#!/usr/bin/env node
/** Build the five localized item-planning CSVs with @oai/artifact-tool.
 * Requires CODEX_PRIMARY_RUNTIME_NODE_MODULES and the primary runtime Node.
 * Templates contain a header and two empty data rows, with no formulas.
 */
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const copy = JSON.parse(await fs.readFile(path.join(root, 'scripts/build-planners.json'), 'utf8'));
const out = path.join(root, 'public/downloads');
const runtimeModules = process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES;
if (!runtimeModules) throw new Error('CODEX_PRIMARY_RUNTIME_NODE_MODULES must point to the installed primary runtime dependencies.');
const work = await fs.mkdtemp(path.join(os.tmpdir(), 'oopbuy-planners-'));
await fs.symlink(runtimeModules, path.join(work, 'node_modules'), 'dir');
const require = createRequire(path.join(work, 'package.json'));
const { Workbook } = await import(pathToFileURL(require.resolve('@oai/artifact-tool')).href);
process.chdir(work);

const fields = ['sourceUrl', 'itemId', 'variant', 'quantity', 'itemPrice', 'currency',
  'domesticFreight', 'date', 'warehouseWeight', 'qcDecision', 'nextAction'];
const escapeCsv = value => '"' + String(value ?? '').replaceAll('"', '""') + '"';
await fs.mkdir(out, { recursive: true });
for (const [locale, t] of Object.entries(copy)) {
  const workbook = Workbook.create();
  const sheet = workbook.worksheets.add('Items');
  const headers = fields.map(field => t[field]);
  sheet.getRange('A1:K3').values = [headers, Array(11).fill(''), Array(11).fill('')];
  workbook.recalculate();
  const inspection = await workbook.inspect({ kind: 'region', sheetId: 'Items',
    range: 'A1:K3', maxChars: 1800, tableMaxRows: 3, tableMaxCols: 11 });
  const rows = sheet.getRange('A1:K3').values;
  if (rows.length !== 3 || rows[0].length !== 11 || rows[0].join('|') !== headers.join('|')) {
    throw new Error('Unexpected CSV shape or translated header content: ' + locale);
  }
  if (rows.flat().some(value => /^[=+@-]/.test(String(value ?? '')))) {
    throw new Error('Executable CSV content detected: ' + locale);
  }
  // UTF-8 BOM preserves accented labels in desktop spreadsheet applications.
  const csv = '\uFEFF' + rows.map(row => row.map(escapeCsv).join(',')).join('\r\n') + '\r\n';
  await fs.writeFile(path.join(out, `oopbuy-planner-${locale}.csv`), csv);
  console.log(JSON.stringify({ locale, rows: rows.length, columns: rows[0].length,
    inspection: Boolean(inspection), file: `oopbuy-planner-${locale}.csv` }));
}
process.chdir(root);
await fs.rm(work, { recursive: true, force: true });
