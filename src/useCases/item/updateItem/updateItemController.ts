import { Request, Response } from "express";
import UpdateItemService from "./updateItemService";

export default class UpdateItemController {
  constructor(private updateItemService: UpdateItemService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    try {
      const item = await this.updateItemService.execute(id);
      return res.status(200).send(item);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}
