import AbstractGetRepository from "../../../abstracts/AbstractGetRepository";
import { prisma } from "../../../config/database";
import Category from "../../../models/Category";

export default class GetCategoriesRepository extends AbstractGetRepository<Category> {
  async get(): Promise<Category[]> {
    return prisma.category.findMany();
  }
}
