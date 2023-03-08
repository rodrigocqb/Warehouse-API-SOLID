import GetItemsController from "./getItemsController";
import GetItemsRepository from "./getItemsRepository";
import GetItemsService from "./getItemsService";

const getItemsRepository = new GetItemsRepository();
const getItemsService = new GetItemsService(getItemsRepository);
const getItemsController = new GetItemsController(getItemsService);

export default getItemsController;
