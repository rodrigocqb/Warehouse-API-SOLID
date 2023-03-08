import ICategoryDTO from "../../../DTOs/CategoryDTO";
import ICategory from "../../../interfaces/ICategory";
import CreateCategoryRepository from "./createCategoryRepository";

export default class CreateCategoryService {
  constructor(private createCategoryRepository: CreateCategoryRepository) {}

  execute({ name }: ICategory): Promise<ICategoryDTO> {
    if (!name) throw new Error("Name required");
    const category = this.createCategoryRepository.create({ name });
    return category;
  }
}
