// Express.js Server

import express from 'express';
const app = express();
const PORT = 4320; // the port to listen on
const hostname = '192.168.0.106'

app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});
