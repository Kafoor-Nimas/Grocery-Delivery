import express from "express";
import authUser from "../middlewares/auth.js";
import { updatecart } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/update", authUser, updatecart);

export default cartRouter;
