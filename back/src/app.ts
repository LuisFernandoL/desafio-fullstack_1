import "express-async-errors";
import "reflect-metadata";
import express, { Application, json } from "express";
import { handleErros } from "./middlewares";
import { contactRouter, sessionRouter, userRouter } from "./routers";
import cors from "cors";

const app: Application = express();
app.use(json());
app.use(cors());
app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/contacts", contactRouter);

app.use(handleErros);
export default app;
