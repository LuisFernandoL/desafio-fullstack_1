import { Router } from "express";
import { userController } from "../controllers";
import {
  emailExists,
  userIdExists,
  validateBody,
  validateToken,
} from "../middlewares";
import { userSchemaCreate, userSchemaUpdate } from "../schemas";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userSchemaCreate),
  emailExists,
  userController.createUser
);

userRouter.get("", userController.listUser);

userRouter.get("/profile", validateToken, userController.profile);

userRouter.get("/:id", validateToken, userController.retrieve);

userRouter.patch(
  "/:id",
  validateToken,
  userIdExists,
  emailExists,
  validateBody(userSchemaUpdate),
  userController.updateUser
);

userRouter.delete(
  "/:id",
  validateToken,
  userIdExists,
  userController.deleteUser
);

export default userRouter;
