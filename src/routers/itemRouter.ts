import { Router } from "express";
import createItemController from "../useCases/item/createItem";
import deleteItemController from "../useCases/item/deleteItem";
import getItemsController from "../useCases/item/getItems";

const itemRouter = Router();

itemRouter.get("/", (req, res) => getItemsController.handle(req, res));

itemRouter.post("/", (req, res) => createItemController.handle(req, res));

itemRouter.delete("/:id", (req, res) => deleteItemController.handle(req, res));

export default itemRouter;
