class CartService {
  constructor() {
    this.items = {};
  }

  addToOrder(itemToAdd) {
    const { name, price } = itemToAdd;

    if (this.items.hasOwnProperty(name)) {
      this.items[name] = { price, quantity: this.items[name].quantity + 1 };
    } else {
      this.items[name] = { price, quantity: 1 };
    }
  }
}

export default CartService;
