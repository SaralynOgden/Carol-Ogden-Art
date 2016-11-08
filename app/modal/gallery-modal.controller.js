export default class GalleryModalCtrl {
  constructor(catalogSvc, cartSvc) {
    this.status = false;
    this.work = {};
    this.index = -1;
    this.cartSvc = cartSvc;
    this.catalogSvc = catalogSvc;
  }

  makeModal(work, index) {
    this.status = true;
    this.work = work;
    this.index = index;
  }

  closeModal($event) {
    if ($event.target === $event.currentTarget) {
      this.status = false;
    }
  }

  goBackwards() {
    this.index = (this.index - 1) >= 0 ? (this.index - 1): this.catalogSvc.works.length - 1;
    this.work = this.catalogSvc.works[this.index];
  }

  goForwards() {
    this.index = (this.index + 1) % this.catalogSvc.works.length;
    this.work = this.catalogSvc.works[this.index];
  }

  keydown($event) {
    console.log($event.keyCode);
  }

  addToCart(work) {
    this.cartSvc.addToCart(work);
  }

};

GalleryModalCtrl.$inject = ['catalogService', 'cartService'];
