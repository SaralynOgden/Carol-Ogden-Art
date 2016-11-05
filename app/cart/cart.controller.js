class CartCtrl {
  constructor(ordersSvc) {
    this.ordersSvc = ordersSvc;
    this.items = ordersSvc.items;
    this.subtotal = 0;
    this.taxes = 0;
    this.total = 0;
    this.taxRate = 0.1;
  }

  addToOrder(item) {
    this.ordersSvc.addToOrder(item);
    this.updateTotals(item);
  }

  setTotals() {
    this.subtotal = 0;
    for (const item in this.items) {
      this.subtotal += item.price * item.quantity;
    }
    this.taxes = this.subtotal * this.taxRate;
    this.total = this.subtotal + this.taxes;
  }

  updateTotals(item) {
    this.subtotal += parseFloat(item.price);
    this.taxes = this.subtotal * this.taxRate;
    this.total = this.subtotal + this.taxes;
  }
};

CartCtrl.$inject = ['ordersService'];

export default CartCtrl;
