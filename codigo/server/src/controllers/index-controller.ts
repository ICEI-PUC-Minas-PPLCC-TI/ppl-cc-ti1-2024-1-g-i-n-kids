import { Request, Response } from 'express';
import { handleErrorResponse } from '../middlewares/response-middleware';

export const indexController = async (req: Request, res: Response) => {
    try {
        const projectTitle = 'I&N Kids';
        const projectDescription =
            'Project developed with the goal of serving as the back-end for the I&N Kids website, a platform designed to reduce childrens screen time by providing engaging and playful content and activities.';
        const developer = 'Artur Bomtempo Colen';
        const version = '1.0.0';

        res.status(200).json({
            projectTitle: projectTitle,
            projectDescription: projectDescription,
            developer: developer,
            version: version,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};
