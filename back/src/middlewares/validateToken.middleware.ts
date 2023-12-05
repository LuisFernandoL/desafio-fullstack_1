import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }
  const token: string = authorization.split(" ")[1];

  verify(token, process.env.SECRET_KEY!, (error, decoded) => {
    if (error) throw new AppError(error.message, 401);
    res.locals = { ...res.locals, decoded };
  });

  return next();
};

export { validateToken };
