export default class RegisterService {
  constructor($http) {
    this.$http = $http;
  }

  register(loginInfo) {
    this.$http.post('/api/users', loginInfo)
      .catch((err) => {
        throw err;
      });
  }
}

RegisterService.$inject = ['$http'];
