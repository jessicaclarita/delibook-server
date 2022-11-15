const express = require('express');
const userRoutes = require('./userRoutes');
const cors = require('cors');
const app = express();

require('./dbConnection'); // connect to mongo db
app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.urlencoded({extended: true})); // using express
app.use(express.json()); // converting to json
app.use(userRoutes); // importing userRoutes module

// let the server to run at 5000 port
app.listen(5000, () => {
    console.log('Server running at 5000');
})