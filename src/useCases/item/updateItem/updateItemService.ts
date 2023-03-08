import IItemDTO from "../../../DTOs/ItemDTO";
import UpdateItemRepository from "./updateItemRepository";

export default class UpdateItemService {
  constructor(private updateItemRepository: UpdateItemRepository) {}

  async execute(id: number): Promise<IItemDTO> {
    const item = await this.updateItemRepository.update(id);
    return item;
  }
}
