import { Router } from "express";
import createItemController from "../useCases/item/createItem";
import deleteItemController from "../useCases/item/deleteItem";
import getItemsController from "../useCases/item/getItems";
import updateItemController from "../useCases/item/updateItem";

const itemRouter = Router();

itemRouter.get("/", (req, res) => getItemsController.handle(req, res));

itemRouter.post("/", (req, res) => createItemController.handle(req, res));

itemRouter.delete("/:id", (req, res) => deleteItemController.handle(req, res));

itemRouter.put("/:id", (req, res) => updateItemController.handle(req, res));

export default itemRouter;
