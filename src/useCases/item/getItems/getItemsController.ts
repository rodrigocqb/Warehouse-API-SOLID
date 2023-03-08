import { Request, Response } from "express";
import IItemDTO from "../../../DTOs/ItemDTO";
import GetItemsService from "./getItemsService";

export default class GetItemsController {
  constructor(private getItemsService: GetItemsService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const items: IItemDTO[] = await this.getItemsService.execute();
      return res.status(200).send(items);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}
