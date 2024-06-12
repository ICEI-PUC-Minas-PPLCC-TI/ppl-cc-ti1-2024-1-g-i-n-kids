import { Types } from 'mongoose';

export interface PostInterface {
    title: string;
    author: string;
    content: string;
    imageLink: string;
    userId: Types.ObjectId;
}
