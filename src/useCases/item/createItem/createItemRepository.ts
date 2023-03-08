import { prisma } from "../../../config/database";
import IItem from "../../../interfaces/IItem";
import Item from "../../../models/Item";

export default class CreateItemRepository {
  async create({ name, categoryId }: IItem): Promise<Item> {
    return prisma.item.create({
      data: {
        name,
        categoryId,
      },
    });
  }
}
