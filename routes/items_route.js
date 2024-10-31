import { Router } from "express";
import { addItem, deleteItem, getItem, getItems, updateItem } from "../controllers/items_controller.js";


const itemRouter = Router();

itemRouter.post("/items", addItem);

itemRouter.get("/items", getItems);

itemRouter.get("/items/:id", getItem);

itemRouter.patch("/items/:id", updateItem);

itemRouter.delete("/items/:id", deleteItem);

export default itemRouter;