import {Router} from "express";
import { createTarget, getAllTargets } from "../services/target.service.js";

const targetController = Router();

//******************* 
// Endpoint: /targets
//*******************

// Method: GET, URL: /targets
targetController.get("/", async (req, res) => {

    const data = await getAllTargets();

    res.json({data: data});
} );

// Method: POST, URL: /targets
targetController.post("/", async (req, res) => {

    const data = await createTarget(req.body);

    res.json({ received: req.body, inserted: data });
} );

export default targetController;