const express = require('express');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const path = require('path');
var app = express();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});