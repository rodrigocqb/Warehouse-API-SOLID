import CreateCategoryController from "./createCategoryController";
import CreateCategoryRepository from "./createCategoryRepository";
import CreateCategoryService from "./createCategoryService";

const createCategoryRepository = new CreateCategoryRepository();
const createCategoryService = new CreateCategoryService(
  createCategoryRepository
);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export default createCategoryController;
