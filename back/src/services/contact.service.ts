import { Contact, User } from "../entities";
import { AppError } from "../errors";
import {
  ContactCreate,
  ContactList,
  ContactReturn,
  ContactUpdate,
} from "../interfaces";
import { contactRepository, userRepository } from "../repositories";
import { contactSchemaReturn, contactSchema } from "../schemas";

const createContact = async (
  data: ContactCreate,
  user: User
): Promise<ContactReturn> => {
  const contact: Contact = contactRepository.create({ ...data, user });
  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

const readContact = async (): Promise<ContactList> => {
  return await contactRepository.find();
};

const editionContact = async (
  contact: Contact,
  data: ContactUpdate
): Promise<ContactReturn> => {
  const update: Contact = contactRepository.create({ ...contact, ...data });
  await contactRepository.save(update);
  return contactSchemaReturn.parse(update);
};

const deleteContact = async (contact: Contact): Promise<void> => {
  await contactRepository.remove(contact);
};

export default {
  createContact,
  readContact,
  editionContact,
  deleteContact,
};
