import { prisma } from "../../../config/database";
import Item from "../../../models/Item";

export default class UpdateItemRepository {
  async update(id: number): Promise<Item> {
    return prisma.item.update({
      where: {
        id,
      },
      data: {
        quantity: { increment: 1 },
      },
    });
  }
}
