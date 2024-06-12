import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof SyntaxError && 'body' in err) {
        res.status(400).json({
            error: 'JSON parsing error. Please check the format of your JSON.',
        });
    } else {
        next();
    }
};
