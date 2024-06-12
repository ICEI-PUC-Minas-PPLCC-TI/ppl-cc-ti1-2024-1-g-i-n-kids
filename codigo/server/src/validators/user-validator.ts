import { z } from 'zod';

export const userSchema = z.object({
    name: z
        .string()
        .min(10, 'The user name must be at least 10 characters long.'),
    phone: z
        .string()
        .regex(
            /^\(\d{2}\) \d{5}-\d{4}$/,
            'The phone number must be in the format (xx) xxxxx-xxxx.'
        ),
    email: z.string().email('The email address must be in a valid format.'),
    password: z
        .string()
        .min(8, 'The user password must be at least 8 characters long.'),
});

export const validateUserData = (userData: any) => {
    const result = userSchema.safeParse(userData);

    if (!result.success) {
        const errors = result.error.errors
            .map((error) => error.message)
            .join(', ');

        throw new Error(errors);
    }
};
