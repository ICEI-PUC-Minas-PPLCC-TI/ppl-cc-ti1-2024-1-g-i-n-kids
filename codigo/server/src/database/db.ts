import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDatabase = () => {
    console.log('Wait connecting to the database');

    mongoose
        .connect(`${process.env.DATABASE_URL}`)
        .then(() => console.log('MongoDB Atlas Connected'))
        .catch((error: Error) => console.log(error));
};
