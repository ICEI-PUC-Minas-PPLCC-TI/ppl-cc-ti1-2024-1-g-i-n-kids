import { PostInterface } from '../interfaces/post-interface';
import {
    createPostRepository,
    deletePostRepository,
    findAllPostsRepository,
    findPostByIdRepository,
    updatePostRepository,
} from '../repositories/post-repositoy';

export const findAllPostsService = async () => {
    try {
        const posts = await findAllPostsRepository();
        return posts;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving all posts.');
    }
};

export const findPostByIdService = async (postId: string) => {
    try {
        if (!postId) {
            throw new Error('The post ID was not provided.');
        }

        const post = await findPostByIdRepository(postId);

        if (!post) {
            throw new Error('Post not found.');
        }

        return post;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving post by ID.');
    }
};

export const createPostService = async (postData: PostInterface) => {
    try {
        const createdPost = await createPostRepository(postData);

        return createdPost;
    } catch (error) {
        console.error(error);
    }
};

export const updatePostService = async (
    postId: string,
    postData: Partial<PostInterface>
) => {
    try {
        const updatedPost = await updatePostRepository(postId, postData);

        if (!updatedPost) {
            throw new Error('Post not found.');
        }

        return updatedPost;
    } catch (error) {
        console.error(error);
    }
};

export const deletePostService = async (postId: string) => {
    try {
        const deletedPost = await deletePostRepository(postId);

        if (!deletedPost) {
            throw new Error('Post not found.');
        }

        return deletedPost;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting post.');
    }
};
