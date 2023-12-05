import { NextFunction, Request, Response } from "express";
import { Contact } from "../entities";
import { contactRepository } from "../repositories";
import { AppError } from "../errors";

const contactIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundContact: Contact | null = await contactRepository.findOneBy({
    id,
  });
  if (!foundContact) throw new AppError("Contact not found", 404);

  res.locals = { ...res.locals, foundContact };
  return next();
};

export { contactIdExists };
