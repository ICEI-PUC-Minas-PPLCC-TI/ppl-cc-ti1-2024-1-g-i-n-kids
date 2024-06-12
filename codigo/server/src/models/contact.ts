import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

export const Contact = mongoose.model('Contact', ContactSchema);
