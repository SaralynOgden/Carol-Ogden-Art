export default class CatalogCtrl {
  constructor(catalogSvc, ordersSvc) {
    this.status = false;
  }
};

CatalogCtrl.$inject = ['catalogService', 'ordersService'];
