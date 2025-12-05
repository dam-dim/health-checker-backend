import {Router} from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
    console.log("ok...");
    console.log(req);
    res.json({ status: 'ok', time: new Date() });
});

export default homeController;