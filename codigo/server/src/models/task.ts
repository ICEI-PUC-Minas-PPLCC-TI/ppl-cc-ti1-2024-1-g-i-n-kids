import mongoose, { Types } from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    weekDay: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    userId: {
        type: Types.ObjectId,
        required: true,
    },
});

export const Task = mongoose.model('Task', TaskSchema);
