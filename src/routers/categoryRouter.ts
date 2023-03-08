import { Router } from "express";
import createCategoryController from "../useCases/category/createCategory";
import getCategoriesController from "../useCases/category/getCategories";

const categoryRouter = Router();

categoryRouter.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

categoryRouter.get("/", (req, res) => getCategoriesController.handle(req, res));

export default categoryRouter;
