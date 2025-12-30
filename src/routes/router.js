import {Router} from "express";

import homeController from "../controllers/home.controller.js";
import targetController from "../controllers/target.controller.js";

const ROUTER = Router();

ROUTER.use("/", homeController);
ROUTER.use("/targets", targetController);

export default ROUTER;