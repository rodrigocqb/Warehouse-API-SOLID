import { Router } from "express";
import createCategoryController from "../useCases/category/createCategory";

const categoryRouter = Router();

categoryRouter.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoryRouter.get("/", (req, res) =>
  createCategoryController.handle(req, res)
);

export default categoryRouter;
