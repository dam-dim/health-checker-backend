import {Router} from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
    res.json({ status: 'ok', time: new Date() });
});

export default homeController;