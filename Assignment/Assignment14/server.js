const express = require('express');
const router = require('./router');
const authMiddleware = require('./authMiddle');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',authMiddleware,router);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})