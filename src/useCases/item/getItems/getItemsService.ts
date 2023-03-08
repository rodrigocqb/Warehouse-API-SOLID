import IItemDTO from "../../../DTOs/ItemDTO";
import GetItemsRepository from "./getItemsRepository";

export default class GetItemsService {
  constructor(private getItemsRepository: GetItemsRepository) {}

  async execute(): Promise<IItemDTO[]> {
    const items = await this.getItemsRepository.get();
    return items;
  }
}
