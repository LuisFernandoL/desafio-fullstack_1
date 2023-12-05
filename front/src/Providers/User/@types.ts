import { TLoginForm } from "../../Pages/Login/loginSchemaRegister";
import { TRegisterForm } from "../../Pages/Register/registerFormSchema";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  phone: string;
}

export interface IUserLoginResponse {
  token: string;
  id: number;
}

export interface IUserRegisterResponse {
  acessToken: string;
  user: IUser;
}

export interface IUserContext {
  userLogged: IUser | null;
  userLogin: (formData: TLoginForm) => Promise<void>;
  userRegister: (formData: TRegisterForm) => Promise<void>;
  userLogout: () => void;
  access: () => void;
  contacts: IContact[];
}

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  userId: number;
}

export type INewContact = Omit<IContact, "id">;

export interface IContactContext {
  newContact: INewContact | null;
  createContact: (formData: INewContact) => Promise<void>;
  updateContact: (formData: INewContact, contactID: number) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
  createOpen: boolean;
  setCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  editing: IContact;
  setEditing: React.Dispatch<React.SetStateAction<IContact>>;
  pageEdit: (contact: IContact) => void;
}
