import { prisma } from "../../../config/database";
import Category from "../../../models/Category";

export default class CreateCategoryRepository {
  async create({ name }: Category) {
    return prisma.category.create({
      data: {
        name,
      },
    });
  }
}
