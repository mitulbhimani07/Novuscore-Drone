const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactUsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10,15}$/, "Invalid phone number format"]
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("ContactUs", contactUsSchema);
