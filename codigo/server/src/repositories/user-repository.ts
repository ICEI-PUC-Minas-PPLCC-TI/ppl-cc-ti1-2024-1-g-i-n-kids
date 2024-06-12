import mongoose from 'mongoose';
import { UserInterface } from '../interfaces/user-interface';
import { User } from '../models/user';

export const findAllUsersRepository = () => User.find();

export const findUserByIdRepository = (userId: string) => User.findById(userId);

export const createUserRepository = ({
    name,
    phone,
    email,
    password,
}: UserInterface) =>
    User.create({
        name,
        phone,
        email,
        password,
    });

export const updateUserRepository = async (
    userId: string,
    userData: Partial<UserInterface>
): Promise<mongoose.Document | null> => {
    const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { ...userData },
        { rawResults: true }
    );

    return updatedUser;
};

export const deleteUserRepository = (userId: string) =>
    User.findOneAndDelete({ _id: userId }, { rawResult: true });
