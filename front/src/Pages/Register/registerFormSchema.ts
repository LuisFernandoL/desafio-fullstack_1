import { z } from "zod";

export const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "O nome é obrigatório e precisa cnter ao menos 2 caracteres."),
    email: z
      .string()
      .min(5, "O emaul é obrigatório")
      .email("O email fornecido é inválido."),

    phone: z.string().min(1).max(11),

    password: z
      .string()
      .regex(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula.")
      .regex(/([a-z])/, "Deve conter ao menos 1 letra minúscula.")
      .regex(/(\d)/, "Deve conter ao menos 1 número.")
      .regex(/(\W)/, "Deve conter ao menos 1 caracter especial.")
      .min(8, "No mínimo 8 caracteres."),

    confirmPassword: z.string().min(8, "No mínimo 8 caracteres."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });

export type TRegisterForm = z.infer<typeof registerFormSchema>;
