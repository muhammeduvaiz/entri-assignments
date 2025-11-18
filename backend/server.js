
const express = require('express');
const app = express();
const dbConfig = require('./dbConfig'); // Import database configuration
require('dotenv').config(); // Load environment variables from .env file
const port = process.env.PORT
// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to handle CORS (Cross-Origin Resource Sharing)
// app.get('/',(req,res)=>{
//     res.status(200).send("Hello World from Express  Server");
// }
// );

// app.get('/about',(req,res)=>{
//     res.status(200).send("This is the about page");
// });
// Start the server

app.use('/', require('./routes'));
app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});