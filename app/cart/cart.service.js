class CartService {
  constructor() {
    this.worksToPurchase = {};
    this.numWorksInCart = 0;
    this.taxRate = 0.1;
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
  }

  addToCart(work) {
    const { id, imgUrl, title, price } = work;

    if (this.worksToPurchase.hasOwnProperty(title)) {
      this.worksToPurchase[title] =
          { id, imgUrl, price, quantity: this.worksToPurchase[title].quantity + 1 };
    } else {
      this.worksToPurchase[title] = { id, imgUrl, price, quantity: 1 };
    }
    this.numWorksInCart = this.numWorksInCart + 1;
    this.updateTotals(work);
  }

  updateTotals(work) {
    this.subtotal += work.price;
    this.tax += this.subtotal * this.taxRate;
    this.total += this.subtotal + this.tax;
  }

  deleteEverything(work) {
    this.numWorksInCart = 0;
    this.worksToPurchase = {};
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
  }
}

export default CartService;
