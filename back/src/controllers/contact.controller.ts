import { Request, Response } from "express";
import { contactService } from "../services";
import { ContactReturn } from "../interfaces";
import { User } from "../entities";

const createContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = res.locals.foundUser; //aqui
  const contact: ContactReturn = await contactService.createContact(
    req.body,
    user
  );
  return res.status(201).json(contact);
};

const contactRead = async (req: Request, res: Response): Promise<Response> => {
  const contact = await contactService.readContact();

  return res.status(200).json(contact);
};

const editionContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundContact } = res.locals;
  const { body } = req;

  const contact: ContactReturn = await contactService.editionContact(
    foundContact,
    body
  );
  return res.status(200).json(contact);
};


const deleteContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await contactService.deleteContact(res.locals.foundContact);
  return res.status(204).json();
};

export default {
  createContact,
  contactRead,
  deleteContact,
  editionContact,

};
