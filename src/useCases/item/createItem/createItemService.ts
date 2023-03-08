import IItemDTO from "../../../DTOs/ItemDTO";
import IItem from "../../../interfaces/IItem";
import CreateItemRepository from "./createItemRepository";

export default class CreateItemService {
  constructor(private createItemRepository: CreateItemRepository) {}

  execute({ name, categoryId }: IItem): Promise<IItemDTO> {
    if (!name || categoryId) throw new Error("Name and category required");
    const item = this.createItemRepository.create({ name, categoryId });
    return item;
  }
}
