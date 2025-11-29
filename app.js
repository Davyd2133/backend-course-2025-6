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

const fs = require('fs');

// Створюємо директорію кешу, якщо її не існує
if (!fs.existsSync(options.cache)) {
    fs.mkdirSync(options.cache, { recursive: true });
    console.log("Cache directory created:", options.cache);
}

const http = require('http');

// Створюємо HTTP-сервер
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is running');
});

// Запускаємо сервер
server.listen(options.port, options.host, () => {
    console.log(`Server running at http://${options.host}:${options.port}`);
});


