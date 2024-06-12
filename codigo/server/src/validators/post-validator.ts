import { z } from 'zod';
import { userIdValidator } from './userId-validator';

export const postSchema = z.object({
    title: z
        .string()
        .min(5, 'The post title must be at least 5 characters long.'),
    author: z
        .string()
        .min(
            10,
            'The author name of the post must be at least 10 characters long.'
        ),
    content: z
        .string()
        .min(
            100,
            'The content of the post must be at least 100 characters long.'
        ),
    imageLink: z.string().url('The post image link must be a valid URL.'),
    userId: userIdValidator,
});

export const validatePostData = (postData: any) => {
    const result = postSchema.safeParse(postData);

    if (!result.success) {
        const errors = result.error.errors
            .map((error) => error.message)
            .join(', ');

        throw new Error(errors);
    }
};
