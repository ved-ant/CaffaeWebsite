//Import Dependencies
const contactForm = require('../models/contact');

//Controller Functions
const createContactFormEntry = async (req, res) => {
    try {
        //Get the sent in data off request body
        const {name, email, query} = req.body;
        //Create a note with it
        const form = await contactForm.create({
            name,
            email,
            query,
        });
        //Respond with the new note
        res.json({form});
    }
    catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

//Exports
module.exports = {
    createContactFormEntry,
}