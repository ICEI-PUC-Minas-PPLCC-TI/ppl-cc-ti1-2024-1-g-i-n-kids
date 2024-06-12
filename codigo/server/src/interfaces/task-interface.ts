import { Types } from 'mongoose';

export interface TaskInterface {
    title: string;
    weekDay: string;
    time: string;
    userId: Types.ObjectId;
}
