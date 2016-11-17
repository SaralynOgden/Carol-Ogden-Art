export default class LoginService {
  constructor($http) {
    this.$http = $http;
    $http.get('/api/token')
      .then((response) => {
        this.loginStatus = response.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  login(loginInfo) {
    return this.$http.post('/api/token', loginInfo)
      .then((info) => {
        this.loginStatus = true;
        return info;
      })
      .catch((err) => {
        throw err;
      });
  }

  logout() {
    this.$http.delete('/api/token')
      .then(() => {
        this.loginStatus = false;
      })
      .catch((err) => {
        throw err;
      });
  }
}

LoginService.$inject = ['$http'];
