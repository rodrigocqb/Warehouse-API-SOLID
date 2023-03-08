import UpdateItemController from "./updateItemController";
import UpdateItemRepository from "./updateItemRepository";
import UpdateItemService from "./updateItemService";

const updateItemRepository = new UpdateItemRepository();
const updateItemService = new UpdateItemService(updateItemRepository);
const updateItemController = new UpdateItemController(updateItemService);

export default updateItemController;
