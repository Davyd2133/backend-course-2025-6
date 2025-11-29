// app.js
const { Command } = require('commander');

const program = new Command();

program
  .requiredOption('-h, --host <host>', 'Server host')
  .requiredOption('-p, --port <port>', 'Server port')
  .requiredOption('-c, --cache <cache>', 'Cache directory for files');

program.parse(process.argv);

const options = program.opts();

console.log('Host:', options.host);
console.log('Port:', options.port);
console.log('Cache directory:', options.cache);
