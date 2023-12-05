import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(10, "Email is mandatory.")
    .email("O email fornecido esta invalido."),

  password: z.string().min(8, "Senha te que ter mais de 8 caracters ."),
});

export type TLoginForm = z.infer<typeof loginFormSchema>;
