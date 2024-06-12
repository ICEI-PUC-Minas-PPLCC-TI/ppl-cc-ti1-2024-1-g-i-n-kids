import mongoose from 'mongoose';
import { PostInterface } from '../interfaces/post-interface';
import { Post } from '../models/post';

export const findAllPostsRepository = () => Post.find();

export const findPostByIdRepository = (postId: string) => Post.findById(postId);

export const createPostRepository = ({
    title,
    author,
    content,
    imageLink,
    userId,
}: PostInterface) =>
    Post.create({
        title,
        author,
        content,
        imageLink,
        userId,
    });

export const updatePostRepository = async (
    postId: string,
    postData: Partial<PostInterface>
): Promise<mongoose.Document | null> => {
    const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        { ...postData },
        { rawResults: true }
    );

    return updatedPost;
};

export const deletePostRepository = (postId: string) =>
    Post.findOneAndDelete({ _id: postId }, { rawResults: true });
