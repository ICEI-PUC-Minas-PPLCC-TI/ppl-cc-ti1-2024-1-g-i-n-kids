import { TaskInterface } from '../interfaces/task-interface';
import {
    createTaskRepository,
    deleteTaskRepository,
    findAllTasksRepository,
    findTaskByIdRepository,
    updateTaskRepository,
} from '../repositories/task-repository';

export const findAllTasksService = async () => {
    try {
        const tasks = await findAllTasksRepository();
        return tasks;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving all tasks.');
    }
};

export const findTaskByIdService = async (taskId: string) => {
    try {
        if (!taskId) {
            throw new Error('Task ID not provided.');
        }

        const task = await findTaskByIdRepository(taskId);

        if (!task) {
            throw new Error('Task not found.');
        }

        return task;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving task by ID.');
    }
};

export const createTaskService = async (taskData: TaskInterface) => {
    try {
        const createdTask = await createTaskRepository(taskData);

        return createdTask;
    } catch (error) {
        console.error(error);
    }
};

export const updateTaskService = async (
    taskId: string,
    taskData: Partial<TaskInterface>
) => {
    try {
        const updatedTask = await updateTaskRepository(taskId, taskData);

        if (!updatedTask) {
            throw new Error('Task not found.');
        }

        return updatedTask;
    } catch (error) {
        console.error(error);
    }
};

export const deleteTaskService = async (taskId: string) => {
    try {
        const deletedTask = await deleteTaskRepository(taskId);

        if (!deletedTask) {
            throw new Error('Task not found.');
        }

        return deletedTask;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting task.');
    }
};
