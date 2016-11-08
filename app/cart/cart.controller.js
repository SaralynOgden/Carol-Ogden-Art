export default class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }

  getTotalNumInCart() {
    return this.cartSvc.numWorksInCart;
  }
};

CartCtrl.$inject = ['cartService'];
