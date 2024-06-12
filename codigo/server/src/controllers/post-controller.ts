import { Request, Response } from 'express';
import { PostInterface } from '../interfaces/post-interface';
import {
    createPostService,
    deletePostService,
    findAllPostsService,
    findPostByIdService,
    updatePostService,
} from '../services/post-service';
import { validatePostData } from '../validators/post-validator';
import { handleErrorResponse } from '../middlewares/response-middleware';

export const findAllPostsController = async (req: Request, res: Response) => {
    try {
        const posts = await findAllPostsService();

        res.status(200).json({
            Posts: posts,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const findPostByIdController = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id as string;

        if (!postId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        const post = await findPostByIdService(postId);

        res.status(200).json({
            Post: post,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'displaying the post');
    }
};

export const createPostController = async (req: Request, res: Response) => {
    try {
        const postData = req.body as PostInterface;

        validatePostData(postData);

        const createdPost = await createPostService(postData);

        res.status(201).json({
            message: 'Post created successfully.',
            Post: createdPost,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const updatePostController = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id as string;
        const postData = req.body as PostInterface;

        if (!postId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        validatePostData(postData);

        const updatedPost = await updatePostService(postId, postData);

        res.status(200).json({
            message: 'Data updated successfully.',
            Post: updatedPost,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'updating post data');
    }
};

export const deletePostController = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id as string;

        if (!postId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        await deletePostService(postId);

        res.status(200).json({
            message: 'Deletion completed successfully.',
        });
    } catch (error) {
        handleErrorResponse(res, error, 'deleting the post');
    }
};
