export default class AccountModalCtrl {
  constructor() {
    this.iconStatus = false;
    this.loginStatus = false;
    this.registerStatus = false;
    this.loginRegStatus = false;
  }

  toggleIconModal() {
    this.iconStatus = !this.iconStatus;
  }

  toggleLogin($event) {
    this.loginStatus = !this.loginStatus;
    this.toggleLoginRegModal($event);
  }

  toggleRegister($event) {
    this.registerStatus = !this.registerStatus;
    this.toggleLoginRegModal($event);
  }

  toggleLoginRegModal($event) {
    if ($event.target === $event.currentTarget) {
      this.loginRegStatus = !this.loginRegStatus;
      if (!this.loginRegStatus) {
        this.loginStatus = false;
        this.registerStatus = false;
      }
    }
  }
};
