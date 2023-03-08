import { Request, Response } from "express";
import ICategoryDTO from "../../../DTOs/CategoryDTO";
import GetCategoriesService from "./getCategoriesService";

export default class GetCategoriesController {
  constructor(private getCategoriesService: GetCategoriesService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const categories: ICategoryDTO[] =
        await this.getCategoriesService.execute();
      return res.status(200).send(categories);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}
