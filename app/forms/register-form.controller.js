export default class RegisterFormCtrl {
  constructor(registerSvc, registerModalSvc) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.registerModalSvc = registerModalSvc;
  }

  closeModal($event) {
    this.registerModalSvc.closeModal($event);
  }

  getModalStatus() {
    return this.registerModalSvc.modalStatus;
  }

  register() {
    this.registerSvc.register({firstName: this.firstName,
                               lastName: this.lastName,
                               email: this.email,
                               password: this.password});
  }
};

RegisterFormCtrl.$inject = ['registerService', 'registerModalService'];
