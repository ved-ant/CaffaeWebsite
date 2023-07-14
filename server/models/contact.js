//Import dependencies
const mongoose = require('mongoose');

//Create Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    query: String,
});

const Contact = mongoose.model('Contact', contactSchema);

//Exports
module.exports = Contact;