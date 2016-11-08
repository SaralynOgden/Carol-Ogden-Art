export default class OrderCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
    this.worksToPurchase = cartSvc.worksToPurchase;
    this.subtotal = cartSvc.subtotal;
  }
};

OrderCtrl.$inject = ['cartService'];
