import { ContactInterface } from '../interfaces/contact-interface';
import {
    createContactRepository,
    deleteContactRepository,
    findAllContactsRepository,
    findContactByIdRepository,
    updateContactRepository,
} from '../repositories/contact-repository';

export const findAllContactsService = async () => {
    try {
        const contacts = await findAllContactsRepository();
        return contacts;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving all contacts.');
    }
};

export const findContactByIdService = async (contactId: string) => {
    try {
        if (!contactId) {
            throw new Error('The contact ID was not provided.');
        }

        const contact = await findContactByIdRepository(contactId);

        if (!contact) {
            throw new Error('Contact not found.');
        }

        return contact;
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving contact by ID.');
    }
};

export const createContactService = async (contactData: ContactInterface) => {
    try {
        const createdContact = await createContactRepository(contactData);

        return createdContact;
    } catch (error) {
        console.error(error);
    }
};

export const updateContactService = async (
    contactId: string,
    contactData: Partial<ContactInterface>
) => {
    try {
        const updatedContact = await updateContactRepository(
            contactId,
            contactData
        );

        if (!updatedContact) {
            throw new Error('Contact not found.');
        }

        return updatedContact;
    } catch (error) {
        console.error(error);
    }
};

export const deleteContactService = async (contactId: string) => {
    try {
        const deletedContact = await deleteContactRepository(contactId);

        if (!deletedContact) {
            throw new Error('Contact not found.');
        }

        return deletedContact;
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting contact.');
    }
};
