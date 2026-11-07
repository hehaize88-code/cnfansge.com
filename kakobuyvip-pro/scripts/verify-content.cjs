/* Production-rendered checks cover all 175 URLs and five languages. */
const {spawnSync}=require('node:child_process');
const result=spawnSync(process.execPath,['--test','tests/rendered-html.test.mjs'],{stdio:'inherit'});
process.exitCode=result.status??1;
