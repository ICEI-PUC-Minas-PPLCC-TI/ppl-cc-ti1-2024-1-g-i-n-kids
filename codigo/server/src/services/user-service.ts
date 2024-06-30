import { UserInterface } from '../interfaces/user-interface';
import {
    createUserRepository,
    deleteUserRepository,
    findAllUsersRepository,
    findUserByIdRepository,
    updateUserRepository,
} from '../repositories/user-repository';

export const findAllUsersService = async () => {
    try {
        const users = await findAllUsersRepository();
        return users;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving all users.');
    }
};

export const findUserByIdService = async (userId: string) => {
    try {
        if (!userId) {
            throw new Error('User ID not provided.');
        }

        const user = await findUserByIdRepository(userId);

        if (!user) {
            throw new Error('User not found.');
        }

        return user;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving user by ID.');
    }
};

export const createUserService = async (userData: UserInterface) => {
    try {
        const createdUser = await createUserRepository(userData);

        return createdUser;
    } catch (error) {
        console.error(error);
    }
};

export const updateUserService = async (
    userId: string,
    userData: Partial<UserInterface>
) => {
    try {
        const updatedUser = await updateUserRepository(userId, userData);

        if (!updatedUser) {
            throw new Error('User not found.');
        }

        return updatedUser;
    } catch (error) {
        console.error(error);
    }
};

export const deleteUserService = async (userId: string) => {
    try {
        const deletedUser = await deleteUserRepository(userId);

        if (!deletedUser) {
            throw new Error('User not found.');
        }

        return deletedUser;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting user.');
    }
};
