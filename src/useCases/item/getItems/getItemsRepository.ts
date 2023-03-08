import AbstractGetRepository from "../../../abstracts/AbstractGetRepository";
import { prisma } from "../../../config/database";
import Item from "../../../models/Item";

export default class GetItemsRepository extends AbstractGetRepository<Item> {
  async get(): Promise<Item[]> {
    return prisma.item.findMany();
  }
}
