import mongoose from 'mongoose';
import { ContactInterface } from '../interfaces/contact-interface';
import { Contact } from '../models/contact';

export const findAllContactsRepository = () => Contact.find();

export const findContactByIdRepository = (contactId: string) =>
    Contact.findById(contactId);

export const createContactRepository = ({
    username,
    email,
    message,
}: ContactInterface) =>
    Contact.create({
        username,
        email,
        message,
    });

export const updateContactRepository = async (
    contactId: string,
    contactData: Partial<ContactInterface>
): Promise<mongoose.Document | null> => {
    const updatedContact = await Contact.findOneAndUpdate(
        { _id: contactId },
        { ...contactData },
        { rawResults: true }
    );

    return updatedContact;
};

export const deleteContactRepository = (contactId: string) =>
    Contact.findOneAndDelete({ _id: contactId }, { rawResult: true });
