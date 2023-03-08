import { Request, Response } from "express";
import DeleteItemService from "./deleteItemService";

export default class DeleteItemController {
  constructor(private deleteItemService: DeleteItemService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    try {
      await this.deleteItemService.execute(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
}
