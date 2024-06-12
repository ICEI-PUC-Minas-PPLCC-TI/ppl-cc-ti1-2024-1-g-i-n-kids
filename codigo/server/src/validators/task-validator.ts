import { z } from 'zod';
import { userIdValidator } from './userId-validator';

export const taskSchema = z.object({
    title: z
        .string()
        .min(5, 'The task title must be at least 5 characters long.'),
    weekDay: z
        .string()
        .min(6, 'The weekday must be at least 6 characters long.'),
    time: z
        .string()
        .regex(/^\d{2}:\d{2}$/, 'The time must be in the format xx:xx.'),
    userId: userIdValidator,
});

export const validateTaskData = (taskData: any) => {
    const result = taskSchema.safeParse(taskData);

    if (!result.success) {
        const errors = result.error.errors
            .map((error) => error.message)
            .join(', ');

        throw new Error(errors);
    }
};
