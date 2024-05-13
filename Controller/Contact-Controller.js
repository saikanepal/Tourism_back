const Contact = require("../models/contactSchema");
const contactSchema = require("../models/contactSchema");

const postContactDetails = async (req, res) => {
    try {
        const { name, email, country, contactNumber } = req.body;

        const newContact = new Contact({ name, email, country, contactNumber })
        await newContact.save()

        res.status(200).json(newContact);
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: "Error in contact form", error: err.message });
    }
};

const getContactDetails = async (req, res) => {
    try {
        const contact = await Contact.find()
        return res.status(201).json({ contact })
    } catch (err) {
        console.log(err.message)
    }
};

module.exports = {
    postContactDetails, getContactDetails
};