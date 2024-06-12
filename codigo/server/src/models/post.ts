import mongoose, { Types } from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        required: true,
    },
    userId: {
        type: Types.ObjectId,
        required: true,
    },
});

export const Post = mongoose.model('Post', PostSchema);
