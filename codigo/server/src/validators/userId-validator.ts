import { Types } from 'mongoose';
import { z } from 'zod';

export const userIdValidator = z.string().refine(
    (value) => {
        return Types.ObjectId.isValid(value);
    },
    {
        message: 'The userId must be a valid ObjectId.',
    }
);
