import GetCategoriesController from "./getCategoriesController";
import GetCategoriesRepository from "./getCategoriesRepository";
import GetCategoriesService from "./getCategoriesService";

const getCategoriesRepository = new GetCategoriesRepository();
const getCategoriesService = new GetCategoriesService(getCategoriesRepository);
const getCategoriesController = new GetCategoriesController(
  getCategoriesService
);

export default getCategoriesController;
