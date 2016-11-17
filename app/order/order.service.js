export default class OrderService {
  constructor($http, cartSvc) {
    this.$http = $http;
    this.cartSvc = cartSvc;
  }

  submitOrder(orderInfo) {
    this.$http.post('/api/orders', orderInfo)
      .then(() => {
        console.log('here');
        this.cartSvc.deleteEverything();
      })
      .catch((err) => {
        throw err;
      })
  }
};

OrderService.$inject = ['$http', 'cartService'];
