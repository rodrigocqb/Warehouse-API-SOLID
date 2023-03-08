import ICategoryDTO from "../../../DTOs/CategoryDTO";
import GetCategoriesRepository from "./getCategoriesRepository";

export default class GetCategoriesService {
  constructor(private getCategoriesRepository: GetCategoriesRepository) {}

  async execute(): Promise<ICategoryDTO[]> {
    const categories = await this.getCategoriesRepository.get();
    return categories;
  }
}
