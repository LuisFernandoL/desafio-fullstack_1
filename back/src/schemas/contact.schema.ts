import { z } from "zod";
import { userSchemaReturn } from "./user.schema";

const contactSchema = z.object({
  id: z.number().positive(),
  fullName: z.string().max(60),
  email: z.string().max(45).email(),
  phone: z.string().max(45),
  date: z.string(),
});

const contactSchemaCreate = contactSchema.omit({
  id: true,
  date: true,
});

const contactSchemaUpdate = contactSchemaCreate.partial();
const contactSchemaReturn = contactSchema;
const contactSchemaList = contactSchemaReturn.array();

export {
  contactSchema,
  contactSchemaCreate,
  contactSchemaUpdate,
  contactSchemaReturn,
  contactSchemaList,
};
