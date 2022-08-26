import express from "express";
import { NameController } from "../controllers/user";

const userRouter: express.Router = express.Router();

userRouter.get("/:name", NameController);

export default userRouter;