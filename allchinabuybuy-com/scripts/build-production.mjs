import {spawnSync} from 'node:child_process';
const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const result = spawnSync(command, ['run', 'build'], {
  stdio: 'inherit',
  env: {...process.env, SITE_ORIGIN: 'https://allchinabuybuy.com', SITE_INDEXABLE: 'true'},
});
if (result.status !== 0) process.exit(result.status ?? 1);
const verify = spawnSync(process.execPath, ['scripts/verify-production.mjs'], {stdio: 'inherit'});
process.exit(verify.status ?? 1);
