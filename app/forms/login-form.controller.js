export default class LoginFormCtrl {
  constructor(loginSvc, loginModalSvc) {
    this.email = '';
    this.password = '';
    this.loginSvc = loginSvc;
    this.loginModalSvc = loginModalSvc;
  }

  closeModal($event) {
    this.loginModalSvc.closeModal($event);
  }

  getModalStatus() {
    return this.loginModalSvc.modalStatus;
  }

  login() {
    this.loginSvc.login({email: this.email,
                         password: this.password});
    this.loginModalSvc.closeModal()
  }
};

LoginFormCtrl.$inject = ['loginService', 'loginModalService'];
