//Import Dependencies
const mongoose = require('mongoose');

//Create function to connect to the Database
async function connectToDb() {
    try {
        //Database Connected
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to Database');
    }
    catch (err) {
        //Error in Database Connection
        console.log(err);
    }
}

//Export functions
module.exports = connectToDb;