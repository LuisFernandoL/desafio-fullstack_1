import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  fullName: z.string().max(60),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  phone: z.string().max(11),
  date: z.string(),
});

const userSchemaCreate = z
  .object({
    fullName: z.string().max(60),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    phone: z.string().max(11),
    date: z.string(),
  })
  .omit({ date: true });

const userSchemaUpdate = userSchemaCreate.partial();
const userSchemaReturn = userSchema.omit({ password: true });
const userSchemaList = userSchemaReturn.array();

export {
  userSchema,
  userSchemaCreate,
  userSchemaUpdate,
  userSchemaReturn,
  userSchemaList,
};
