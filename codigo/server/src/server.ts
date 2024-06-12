import express, { Request, Response } from 'express';
import { configureCORS } from './middlewares/cors-middleware';
import { errorMiddleware } from './middlewares/error-middleware';
import { connectDatabase } from './database/db';
import { indexRouter } from './routes/index-router';
import { userRouter } from './routes/user-route';
import { postRouter } from './routes/post-route';
import { taskRouter } from './routes/task-controller';
import { contactRouter } from './routes/contact-route';

const app = express();

app.use(express.json());
connectDatabase();
configureCORS(app);
app.use(errorMiddleware);

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/tasks', taskRouter);
app.use('/contacts', contactRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        message: 'Route not found.',
    });
});

export { app };
