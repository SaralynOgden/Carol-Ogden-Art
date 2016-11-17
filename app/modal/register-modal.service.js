export default class RegisterModalService {
  constructor() {
    this.modalStatus = false;
  }

  toggleRegisterModal() {
    this.modalStatus = !this.modalStatus;
  }

  closeModal($event) {
    if ($event.target === $event.currentTarget) {
      this.modalStatus = false;
    }
  }
};
