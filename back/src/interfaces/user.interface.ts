import { z } from "zod";
import {
  userSchemaCreate,
  userSchemaUpdate,
  userSchemaReturn,
  userSchemaList,
} from "../schemas";

import { User } from "../entities";
import { Repository } from "typeorm";

type UserCreate = z.infer<typeof userSchemaCreate>;
type UserList = z.infer<typeof userSchemaList>;
type UserUpdate = z.infer<typeof userSchemaUpdate>;
type UserReturn = z.infer<typeof userSchemaReturn>;

type UserRepo = Repository<User>;



export { UserCreate, UserList, UserUpdate, UserRepo, UserReturn };

