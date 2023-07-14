//Import depedencies and create app
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const connectToDb = require('./config/db');
const formController = require('./controllers/contactFormController');

connectToDb();

//Create and configure express app
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routing
app.post("/contact-create", formController.createContactFormEntry);

//Start the server on port 3000
app.listen(3000, () => {
    console.log("Server started on port 3000");
});