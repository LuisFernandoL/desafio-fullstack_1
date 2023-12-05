import { sign } from "jsonwebtoken";
import { User } from "../entities";
import { AppError } from "../errors";
import { SessionCreate, SessionReturn } from "../interfaces";
import { compare } from "bcryptjs";
import { userRepository } from "../repositories";

const createSession = async ({
  email,
  password,
}: SessionCreate): Promise<SessionReturn> => {
  const foundUser: User | null = await userRepository.findOneBy({ email });

  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const samePassword: boolean = await compare(password, foundUser.password);

  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { userId: foundUser.id },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );
  return { token, id: foundUser.id };
};

export default { createSession };
