export default class UserMenuCtrl {
  constructor(loginSvc) {
    this.loginSvc = loginSvc;
    this.menuStatus = false;
  }

  getLoginStatus() {
    return this.loginSvc.loginStatus;
  }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
  }
};

UserMenuCtrl.$inject = ['loginService'];
