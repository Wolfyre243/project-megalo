import { createBasePool } from './database/databasing.js';
// Express.js Server

import express from 'express';
const app = express();
const PORT = 4320; // the port to listen on

app.listen(PORT, () => {
    console.log(`Server running!`);
});

app.get('/', (req, res) => {
    const pool = createBasePool();
    console.log("Connected successfully to postgres!")
    res.send('<h1>Hello World</h1>');
});
