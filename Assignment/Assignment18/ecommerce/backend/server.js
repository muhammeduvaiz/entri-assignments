const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./router/router")
const port = process.env.PORT;
const connectDB = require("./dbConfigure")
connectDB()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});