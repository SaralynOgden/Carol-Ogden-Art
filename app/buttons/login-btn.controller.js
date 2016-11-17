export default class LoginBtnCtrl {
  constructor(loginSvc, loginModalSvc) {
    this.loginStatus = loginSvc.loginStatus;
    this.loginModalSvc = loginModalSvc;
  }

  toggleLoginModal() {
    this.loginModalSvc.toggleLoginModal();
  }
};

LoginBtnCtrl.$inject = ['loginService', 'loginModalService'];
