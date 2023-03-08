export default class Item {
  id: number;
  name: string;
  categoryId: number;
  quantity: number;

  constructor(id: number, name: string, categoryId: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.quantity = quantity;
  }
}
