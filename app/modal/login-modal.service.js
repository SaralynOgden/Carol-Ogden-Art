export default class LoginModalService {
  constructor() {
    this.modalStatus = false;
  }

  toggleLoginModal() {
    this.modalStatus = !this.modalStatus;
  }

  closeModal($event) {
    if (!$event || $event.target === $event.currentTarget) {
      this.modalStatus = false;
    }
  }
};
