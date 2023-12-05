import { Router } from "express";
import { validateBody } from "../middlewares";
import { sessionSchemaLogin } from "../schemas";
import sessionController from "../controllers/session.controller";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  validateBody(sessionSchemaLogin),
  sessionController.sessionCreate
);

export default sessionRouter;
