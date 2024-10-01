// Express.js Server

import express from 'express';
const app = express();
const PORT = 3000; // the port to listen on
const hostname = '192.168.0.106'

app.listen(PORT, hostname);

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});
