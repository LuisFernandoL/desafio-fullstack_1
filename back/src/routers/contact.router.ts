import { Router } from "express";
import { contactController } from "../controllers";
import {
  contactIdExists,
  emailExistsContact,
  userIdExists,
  validateBody,
  validateToken,
} from "../middlewares";
import { contactSchemaCreate, contactSchemaUpdate } from "../schemas";

const contactRouter: Router = Router();

contactRouter.post(
  "/:id/user",
  userIdExists,
  validateToken,
  validateBody(contactSchemaCreate),
  emailExistsContact,
  contactController.createContact
);

contactRouter.get("", validateToken, contactController.contactRead);

contactRouter.patch(
  "/:id",
  validateToken,
  contactIdExists,
  validateBody(contactSchemaUpdate),
  emailExistsContact,
  contactController.editionContact
);

contactRouter.delete(
  "/:id",
  validateToken,
  contactIdExists,
  contactController.deleteContact
);

export default contactRouter;
