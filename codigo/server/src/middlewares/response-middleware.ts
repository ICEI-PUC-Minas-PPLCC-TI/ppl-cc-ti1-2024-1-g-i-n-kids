import { Response } from 'express';

export const handleErrorResponse = (
    res: Response,
    error: unknown,
    context?: string
) => {
    const message = error instanceof Error ? error.message : 'Unknown error.';

    const status = message.includes('Cast to ObjectId failed') ? 400 : 500;

    const errorMessage = context
        ? `The provided ID is not valid for ${context}.`
        : message;

    res.status(status).json({
        message: errorMessage,
    });
};
