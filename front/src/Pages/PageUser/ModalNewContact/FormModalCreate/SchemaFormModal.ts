import { z } from "zod";

export const SchemaFormModal = z.object({
  fullName: z.string().min(3),
  email: z.string().email("O email fornecido esta invalido").min(10),
  phone: z.string().min(11, "O numero tem que ter 11 caracteres."),
});

export type IContactNew = z.infer<typeof SchemaFormModal>;
