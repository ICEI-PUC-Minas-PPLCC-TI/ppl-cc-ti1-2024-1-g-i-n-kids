import express from 'express';
import {
    createUserController,
    deleteUserController,
    findAllUsersController,
    findUserByIdController,
    updateUserController,
} from '../controllers/user-controller';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const userRouter = express.Router();

userRouter.get('/', verifyTokenInBack, findAllUsersController);

userRouter.get('/search/:id', verifyTokenInBack, findUserByIdController);

userRouter.post('/', verifyTokenInBack, createUserController);

userRouter.put('/:id', verifyTokenInBack, updateUserController);

userRouter.delete('/:id', verifyTokenInBack, deleteUserController);

export { userRouter };
