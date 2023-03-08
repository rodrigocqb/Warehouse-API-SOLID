import { prisma } from "../../../config/database";
import ICategory from "../../../interfaces/ICategory";
import Category from "../../../models/Category";

export default class CreateCategoryRepository {
  async create({ name }: ICategory): Promise<Category> {
    return prisma.category.create({
      data: {
        name,
      },
    });
  }
}
