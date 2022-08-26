import express from "express";
import { OutputStartTime } from "../controllers/home";

const homeRouter: express.Router = express.Router();

homeRouter.get("/start-time", OutputStartTime);

export default homeRouter;