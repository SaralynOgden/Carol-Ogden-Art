class CartService {
  constructor() {
    this.worksToPurchase = {};
    this.numWorksInCart = 0;
    this.subtotal = 0;
  }

  addToCart(work) {
    const { imgUrl, title, price } = work;

    if (this.worksToPurchase.hasOwnProperty(title)) {
      this.worksToPurchase[title] =
          { imgUrl, price, quantity: this.worksToPurchase[title].quantity + 1 };
    } else {
      this.worksToPurchase[title] = { imgUrl, price, quantity: 1 };
    }
    this.numWorksInCart = this.numWorksInCart + 1;
    this.updateTotals(work);
  }

  updateTotals(work) {
    this.subtotal += work.price;
    console.log(this.subtotal);
  }
}

export default CartService;
