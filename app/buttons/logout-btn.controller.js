export default class LogoutBtnCtrl {
  constructor(loginSvc) {
    this.loginStatus = loginSvc.loginStatus;
    this.loginSvc = loginSvc;
  }

  logout() {
    this.loginSvc.logout();
  }
};

LogoutBtnCtrl.$inject = ['loginService'];
