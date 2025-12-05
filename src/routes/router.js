import {Router} from "express";

import homeController from "../controllers/home.controller.js";

const ROUTER = Router();

ROUTER.use("/", homeController);

export default ROUTER;