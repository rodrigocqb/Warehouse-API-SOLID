import ICategoryDTO from "../../../DTO/CategoryDTO";
import CreateCategoryRepository from "./createCategoryRepository";

export default class CreateCategoryService {
  constructor(private createCategoryRepository: CreateCategoryRepository) {}

  execute({ name }: ICategoryDTO) {
    if (!name) throw new Error("Name required");
    const category = this.createCategoryRepository.create({ name });
    return category;
  }
}
