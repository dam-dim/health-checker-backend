import {Router} from "express";

const homeController = Router();

homeController.get("/", (req, res) => {
    res.send("hello");
});

export default homeController;