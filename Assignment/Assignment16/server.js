const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./dbConfig');
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',router);
const PORT = 5000;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});