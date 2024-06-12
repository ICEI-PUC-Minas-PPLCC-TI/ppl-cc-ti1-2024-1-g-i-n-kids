import express from 'express';
import {
    createPostController,
    deletePostController,
    findAllPostsController,
    findPostByIdController,
    updatePostController,
} from '../controllers/post-controller';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const postRouter = express.Router();

postRouter.get('/', verifyTokenInBack, findAllPostsController);

postRouter.get('/search/:id', verifyTokenInBack, findPostByIdController);

postRouter.post('/', verifyTokenInBack, createPostController);

postRouter.put('/:id', verifyTokenInBack, updatePostController);

postRouter.delete('/:id', verifyTokenInBack, deletePostController);

export { postRouter };
