export default class LoginCtrl {
  constructor(loginSvc) {
    this.loginSvc = loginSvc;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  closeLoginModal($event) {
    if ($event.target === $event.currentTarget) {
      
    }
  }

  login() {
    this.loginSvc.login({email: this.email,
                               password: this.password});
  }
}

LoginCtrl.$inject = ['loginService'];
