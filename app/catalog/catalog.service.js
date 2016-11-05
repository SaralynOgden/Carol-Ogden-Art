export default class CatalogService {
  constructor($http) {
    this.$http = $http;
  }

  getWorks() {
    return this.$http.get('/api/works')
      .then((works) => {
        return works.data;
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

CatalogService.$inject = ['$http'];
