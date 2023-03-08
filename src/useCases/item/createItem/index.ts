import CreateItemController from "./createItemController";
import CreateItemRepository from "./createItemRepository";
import CreateItemService from "./createItemService";

const createItemRepository = new CreateItemRepository();
const createItemService = new CreateItemService(
  createItemRepository
);
const createItemController = new CreateItemController(
  createItemService
);

export default createItemController;
