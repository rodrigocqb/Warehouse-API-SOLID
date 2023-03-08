import { prisma } from "../../../config/database";

export default class DeleteItemRepository {
  async deleteItem(id: number) {
    return prisma.item.delete({
      where: {
        id,
      },
    });
  }
}
