import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities";

const emailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  if (!email) {
    return next();
  }

  const foundEmail: User | null = await userRepository.findOneBy({ email });

  if (foundEmail) throw new AppError("Email already exists", 409);
  return next();
};

export { emailExists };
