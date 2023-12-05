import { z } from "zod";
import {
  contactSchemaCreate,
  contactSchemaUpdate,
  contactSchemaReturn,
  contactSchemaList,
} from "../schemas";

import { Contact } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type ContactCreate = z.infer<typeof contactSchemaCreate>;
type ContactList = z.infer<typeof contactSchemaList>;
type ContactUpdate = DeepPartial<typeof contactSchemaUpdate>;
type ContactReturn = z.infer<typeof contactSchemaReturn>;

type ContactRepo = Repository<Contact>;

export {
  ContactCreate,
  ContactList,
  ContactUpdate,
  ContactRepo,
  ContactReturn,
};
