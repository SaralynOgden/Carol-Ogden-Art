export default class OrderCtrl {
  constructor(cartSvc, orderSvc) {
    this.cartSvc = cartSvc;
    this.orderSvc = orderSvc;
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.city = '';
    this.state = '';
    this.zip = '';
  }

  getWorksToPurchase() {
    return this.cartSvc.worksToPurchase;
  }

  getSubtotal() {
    return this.cartSvc.subtotal;
  }

  getTax() {
    return this.cartSvc.tax;
  }

  getTotal() {
    return this.cartSvc.total;
  }

  submitOrder() {
    const worksToPassToOrder = [];

    for (const work in this.worksToPurchase) {
      const tempObj = this.worksToPurchase[work];

      worksToPassToOrder.push({id: tempObj.id, quantity: tempObj.quantity});
    }

    this.orderSvc.submitOrder({works: worksToPassToOrder,
                               address1: this.addressLine1,
                               address2: this.addressLine2,
                               city: this.city,
                               state: this.state,
                               zip: this.zip});
  }
};

OrderCtrl.$inject = ['cartService', 'orderService'];
