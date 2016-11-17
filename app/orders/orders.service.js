export default class OrdersService {
  constructor($http) {
    $http.get('/api/orders')
      .then((orders) => {
        this.orders = orders.data
      })
      .catch((err) => {
        throw err
      });
  }
};

OrdersService.$inject = ['$http'];
