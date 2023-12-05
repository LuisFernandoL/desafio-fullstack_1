import { NextFunction, Request, Response } from "express";
import { contactRepository } from "../repositories";
import { AppError } from "../errors";
import { Contact } from "../entities";

const emailExistsContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  if (!email) {
    return next();
  }

  const foundEmail: Contact | null = await contactRepository.findOneBy({ email });

  if (foundEmail) throw new AppError("Email already exists", 409);
  return next();
};

export { emailExistsContact };
