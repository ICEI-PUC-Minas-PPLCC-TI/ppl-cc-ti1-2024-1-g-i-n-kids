import express from 'express';
import {
    createContactController,
    deleteContactController,
    findAllContactsController,
    findContactByIdController,
    updateContactController,
} from '../controllers/contact-controller';
import { verifyTokenInBack } from '../middlewares/token-middleware';

const contactRouter = express.Router();

contactRouter.get('/', verifyTokenInBack, findAllContactsController);

contactRouter.get('/search/:id', verifyTokenInBack, findContactByIdController);

contactRouter.post('/', verifyTokenInBack, createContactController);

contactRouter.put('/:id', verifyTokenInBack, updateContactController);

contactRouter.delete('/:id', verifyTokenInBack, deleteContactController);

export { contactRouter };
