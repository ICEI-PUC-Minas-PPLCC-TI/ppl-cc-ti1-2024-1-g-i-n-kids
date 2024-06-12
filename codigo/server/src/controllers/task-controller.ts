import { Request, Response } from 'express';
import { TaskInterface } from '../interfaces/task-interface';
import {
    createTaskService,
    deleteTaskService,
    findAllTasksService,
    findTaskByIdService,
    updateTaskService,
} from '../services/task-service';
import { validateTaskData } from '../validators/task-validator';
import { handleErrorResponse } from '../middlewares/response-middleware';

export const findAllTasksController = async (req: Request, res: Response) => {
    try {
        const tasks = await findAllTasksService();

        res.status(200).json({
            Tasks: tasks,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const findTaskByIdController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id as string;

        if (!taskId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        const task = await findTaskByIdService(taskId);

        res.status(200).json({
            Task: task,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'displaying the task');
    }
};

export const createTaskController = async (req: Request, res: Response) => {
    try {
        const taskData = req.body as TaskInterface;

        validateTaskData(taskData);

        const createdTask = await createTaskService(taskData);

        res.status(201).json({
            message: 'Task created successfully.',
            Task: createdTask,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const updateTaskController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id as string;
        const taskData = req.body as TaskInterface;

        if (!taskId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        validateTaskData(taskData);

        const updatedTask = await updateTaskService(taskId, taskData);

        res.status(200).json({
            message: 'Data updated successfully.',
            Task: updatedTask,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'updating task data');
    }
};

export const deleteTaskController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id as string;

        if (!taskId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        await deleteTaskService(taskId);

        res.status(200).json({
            message: 'Deletion completed successfully.',
        });
    } catch (error) {
        handleErrorResponse(res, error, 'deleting the task');
    }
};
