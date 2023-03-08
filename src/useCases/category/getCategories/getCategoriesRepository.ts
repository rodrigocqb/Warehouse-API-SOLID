import { prisma } from "../../../config/database";
import Category from "../../../models/Category";

export default class GetCategoriesRepository {
  async get(): Promise<Category[]> {
    return prisma.category.findMany();
  }
}
