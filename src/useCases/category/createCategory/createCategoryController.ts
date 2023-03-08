import { Request, Response } from "express";
import ICategoryDTO from "../../../DTOs/CategoryDTO";
import ICategory from "../../../interfaces/ICategory";
import CreateCategoryService from "./createCategoryService";

export default class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(req: Request, res: Response) {
    const { name } = req.body as ICategory;

    try {
      const category: ICategoryDTO = await this.createCategoryService.execute({
        name,
      });
      return res.status(201).send(category);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}
