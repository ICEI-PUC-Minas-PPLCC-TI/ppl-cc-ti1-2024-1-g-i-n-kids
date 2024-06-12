import { z } from 'zod';

export const contactSchema = z.object({
    username: z
        .string()
        .min(10, 'Username must be at least 10 characters long.'),
    email: z.string().email('Email address must be in a valid format.'),
    message: z
        .string()
        .min(50, 'User message must be at least 50 characters long.'),
});

export const validateContactData = (contactData: any) => {
    const result = contactSchema.safeParse(contactData);

    if (!result.success) {
        const errors = result.error.errors
            .map((error) => error.message)
            .join(', ');

        throw new Error(errors);
    }
};
