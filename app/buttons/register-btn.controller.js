export default class RegisterBtnCtrl {
  constructor(loginSvc, registerModalSvc) {
    this.loginStatus = loginSvc.loginStatus;
    this.registerModalSvc = registerModalSvc;
  }

  toggleRegisterModal() {
    this.registerModalSvc.toggleRegisterModal();
  }
};

RegisterBtnCtrl.$inject = ['loginService', 'registerModalService'];
