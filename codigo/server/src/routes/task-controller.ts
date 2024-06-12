import express from 'express';
import {
    createTaskController,
    deleteTaskController,
    findAllTasksController,
    findTaskByIdController,
    updateTaskController,
} from '../controllers/task-controller';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const taskRouter = express.Router();

taskRouter.get('/', verifyTokenInBack, findAllTasksController);

taskRouter.get('/search/:id', verifyTokenInBack, findTaskByIdController);

taskRouter.post('/', verifyTokenInBack, createTaskController);

taskRouter.put('/:id', verifyTokenInBack, updateTaskController);

taskRouter.delete('/:id', verifyTokenInBack, deleteTaskController);

export { taskRouter };
