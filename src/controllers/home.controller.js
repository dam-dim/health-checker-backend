import {Router} from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
    res.json({"hello": "world"});
});

export default homeController;