import { User } from "../entities";
import { AppError } from "../errors";
import {
  ContactReturn,
  UserCreate,
  UserList,
  UserReturn,
  UserUpdate,
} from "../interfaces";
import { contactRepository, userRepository } from "../repositories";
import { userSchemaList, userSchemaReturn } from "../schemas";

const createUser = async ({ ...data }: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create({
    ...data,
  });
  await userRepository.save(user);
  return userSchemaReturn.parse(user);
};

const listUser = async (): Promise<UserList> => {
  const user = await userRepository.find({
    relations: {
      contacts: {},
    },
  });
  return userSchemaList.parse(user);
};

const updateUser = async (
  user: User,
  data: UserUpdate
): Promise<UserReturn> => {
  const userUpdate: User = userRepository.create({
    ...user,
    ...data,
  } as User);
  await userRepository.save(userUpdate);

  return userSchemaReturn.parse(userUpdate);
};

const retrieve = async (id: number): Promise<UserReturn> => {
  const user = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      contacts: {},
    },
  });

  if (!user) throw new AppError("User not found", 404);

  return user;
};

const profile = async (id: number): Promise<UserReturn> => {
  const user = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      contacts: {},
    },
  });
  if (!user) throw new AppError("User not found", 404);

  return user;
};

const deleteUser = async (user: User): Promise<void> => {
  await userRepository.remove(user);
};

export default {
  createUser,
  listUser,
  updateUser,
  deleteUser,
  retrieve,
  profile,
};
