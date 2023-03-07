import { Request, Response } from "express";
import ICategoryDTO from "../../../DTO/CategoryDTO";
import CreateCategoryService from "./createCategoryService";

export default class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  async handle(req: Request, res: Response) {
    const { name } = req.body as ICategoryDTO;

    try {
      const category = await this.createCategoryService.execute({ name });
      return res.status(201).send(category);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}
