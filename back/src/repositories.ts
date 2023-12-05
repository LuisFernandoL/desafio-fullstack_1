import { AppDataSource } from "./data-source";
import { User, Contact } from "./entities";
import { ContactRepo, UserRepo } from "./interfaces";

const userRepository: UserRepo = AppDataSource.getRepository(User);
const contactRepository: ContactRepo = AppDataSource.getRepository(Contact);

export { userRepository, contactRepository };
