import DeleteItemRepository from "./deleteItemRepository";

export default class DeleteItemService {
  constructor(private deleteItemRepository: DeleteItemRepository) {}

  async execute(id: number): Promise<void> {
    await this.deleteItemRepository.deleteItem(id);
    return;
  }
}
