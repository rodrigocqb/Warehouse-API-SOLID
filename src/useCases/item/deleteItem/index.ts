import DeleteItemController from "./deleteItemController";
import DeleteItemRepository from "./deleteItemRepository";
import DeleteItemService from "./deleteItemService";

const deleteItemRepository = new DeleteItemRepository();
const deleteItemService = new DeleteItemService(deleteItemRepository);
const deleteItemController = new DeleteItemController(deleteItemService);

export default deleteItemController;
