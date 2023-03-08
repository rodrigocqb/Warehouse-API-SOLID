import { Request, Response } from "express";
import IItemDTO from "../../../DTOs/ItemDTO";
import IItem from "../../../interfaces/IItem";
import CreateItemService from "./createItemService";

export default class CreateItemController {
  constructor(private createItemService: CreateItemService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, categoryId } = req.body as IItem;

    try {
      const item: IItemDTO = await this.createItemService.execute({
        name,
        categoryId
      });
      return res.status(201).send(item);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}
