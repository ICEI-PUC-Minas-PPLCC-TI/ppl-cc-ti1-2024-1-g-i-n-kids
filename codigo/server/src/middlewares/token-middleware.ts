import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const verifyTokenInBack = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const auth = req.headers.authorization;
        const authArray = auth?.split(' ');
        const secretKey: string = process.env.SECRET_KEY ?? '';

        if (typeof auth !== 'string' || auth.trim() === '') {
            return res.status(401).json({
                message: 'Token not provided.',
            });
        }

        if (authArray?.length !== 2 || authArray[0] !== 'Bearer') {
            return res.status(401).json({
                message: 'Invalid token.',
            });
        }

        const token = authArray[1];

        if (token !== secretKey) {
            return res.status(401).json({
                message: 'Invalid token.',
            });
        }

        next();
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorized access',
        });
    }
};
