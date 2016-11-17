export default class OrdersCtrl {
  constructor(ordersSvc) {
    this.ordersSvc = ordersSvc;
  }

  getOrders() {
    return this.ordersSvc.orders;
  }
};

OrdersCtrl.$inject = ['ordersService'];
