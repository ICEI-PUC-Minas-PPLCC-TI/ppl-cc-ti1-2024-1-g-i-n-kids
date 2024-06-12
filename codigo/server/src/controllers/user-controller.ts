import { Request, Response } from 'express';
import { UserInterface } from '../interfaces/user-interface';
import {
    createUserService,
    deleteUserService,
    findAllUsersService,
    findUserByIdService,
    updateUserService,
} from '../services/user-service';
import { validateUserData } from '../validators/user-validator';
import { handleErrorResponse } from '../middlewares/response-middleware';

export const findAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await findAllUsersService();

        res.status(200).json({
            Users: users,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const findUserByIdController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id as string;

        if (!userId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        const user = await findUserByIdService(userId);

        res.status(200).json({
            User: user,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'user display');
    }
};

export const createUserController = async (req: Request, res: Response) => {
    try {
        const userData = req.body as UserInterface;

        validateUserData(userData);

        const createdUser = await createUserService(userData);

        res.status(201).json({
            message: 'User created successfully.',
            User: createdUser,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id as string;
        const userData = req.body as UserInterface;

        if (!userId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        validateUserData(userData);

        const updatedUser = await updateUserService(userId, userData);

        res.status(200).json({
            message: 'Data updated successfully.',
            User: updatedUser,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'user data update');
    }
};

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id as string;

        if (!userId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        await deleteUserService(userId);

        res.status(200).json({
            message: 'Deletion completed successfully.',
        });
    } catch (error) {
        handleErrorResponse(res, error, 'user deletion');
    }
};
