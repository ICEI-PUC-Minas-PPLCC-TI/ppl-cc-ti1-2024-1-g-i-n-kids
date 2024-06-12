import mongoose from 'mongoose';
import { TaskInterface } from '../interfaces/task-interface';
import { Task } from '../models/task';

export const findAllTasksRepository = () => Task.find();

export const findTaskByIdRepository = (taskId: string) => Task.findById(taskId);

export const createTaskRepository = ({
    title,
    weekDay,
    time,
    userId,
}: TaskInterface) =>
    Task.create({
        title,
        weekDay,
        time,
        userId,
    });

export const updateTaskRepository = async (
    taskId: string,
    taskData: Partial<TaskInterface>
): Promise<mongoose.Document | null> => {
    const updatedTask = await Task.findOneAndUpdate(
        { _id: taskId },
        { ...taskData },
        { rawResults: true }
    );

    return updatedTask;
};

export const deleteTaskRepository = (taskId: string) =>
    Task.findOneAndDelete({ _id: taskId }, { rawResults: true });
