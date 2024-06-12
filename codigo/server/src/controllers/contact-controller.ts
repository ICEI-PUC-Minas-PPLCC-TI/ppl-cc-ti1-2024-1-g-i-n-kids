import { Request, Response } from 'express';
import { ContactInterface } from '../interfaces/contact-interface';
import {
    createContactService,
    deleteContactService,
    findAllContactsService,
    findContactByIdService,
    updateContactService,
} from '../services/contact-service';
import { validateContactData } from '../validators/contact-validator';
import { handleErrorResponse } from '../middlewares/response-middleware';

export const findAllContactsController = async (
    req: Request,
    res: Response
) => {
    try {
        const contacts = await findAllContactsService();

        res.status(200).json({
            Contacts: contacts,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const findContactByIdController = async (
    req: Request,
    res: Response
) => {
    try {
        const contactId = req.params.id as string;

        if (!contactId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        const contact = await findContactByIdService(contactId);

        res.status(200).json({
            Contact: contact,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'displaying the contact');
    }
};

export const createContactController = async (req: Request, res: Response) => {
    try {
        const contactData = req.body as ContactInterface;

        validateContactData(contactData);

        const createdContact = await createContactService(contactData);

        res.status(201).json({
            message: 'Contact created successfully.',
            Contact: createdContact,
        });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

export const updateContactController = async (req: Request, res: Response) => {
    try {
        const contactId = req.params.id as string;
        const contactData = req.body as ContactInterface;

        if (!contactId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        validateContactData(contactData);

        const updatedContact = await updateContactService(
            contactId,
            contactData
        );

        res.status(200).json({
            message: 'Data updated successfully.',
            Contact: updatedContact,
        });
    } catch (error) {
        handleErrorResponse(res, error, 'updating contact data');
    }
};

export const deleteContactController = async (req: Request, res: Response) => {
    try {
        const contactId = req.params.id as string;

        if (!contactId) {
            throw new Error(
                'The ID was not provided as a parameter for the query.'
            );
        }

        await deleteContactService(contactId);

        res.status(200).json({
            message: 'Deletion completed successfully.',
        });
    } catch (error) {
        handleErrorResponse(res, error, 'deleting the contact');
    }
};
