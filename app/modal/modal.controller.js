export default class ModalCtrl {
  constructor() {
    this.status = false;
    this.imgSrc = '';
    this.title = '';
    this.medium = '';
    this.price = '';
    this.dimensions = '';
  }

  makeModal(work) {
    this.status = true;
    this.imgSrc = work.imgUrl;
    this.title = work.title;
    this.medium = work.medium;
    this.price = work.price;
    this.dimensions = work.dimensions;
  }

  closeModal($event) {
    if ($event.target === $event.currentTarget) {
      this.status = false;
    }
  }
};
