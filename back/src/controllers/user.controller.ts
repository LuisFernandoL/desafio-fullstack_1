import { Request, Response } from "express";
import { UserReturn } from "../interfaces";
import { userService } from "../services";
import { User } from "../entities";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.createUser(req.body);
  return res.status(201).json(user);
};

const listUser = async (req: Request, res: Response): Promise<Response> => {
  const user = await userService.listUser();

  return res.status(200).json(user);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const { foundUser } = res.locals;
  const { body } = req;

  const user: UserReturn = await userService.updateUser(foundUser, body);
  return res.status(200).json(user);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const contact = await userService.retrieve(id);

  return res.status(200).json(contact);
};

const profile = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(res.locals.decoded.userId);
  const contact = await userService.profile(id);

  return res.status(200).json(contact);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  await userService.deleteUser(res.locals.foundUser);
  return res.status(204).json();
};

export default {
  createUser,
  listUser,
  updateUser,
  deleteUser,
  retrieve,
  profile,
};
