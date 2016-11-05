export default class CatalogCtrl {
  constructor(catalogSvc, ordersSvc) {
    this.status = false;
    this.direction = '>';
    this.left = '0px';
    this.background = 'transparent';
  }

  transition() {
    this.status = !this.status;
    this.direction = this.direction === '<' ? '>':'<';
    this.left = this.left === '0px' ? '150px':'0px';
    this.background = this.background === 'transparent'? 'white':'transparent';
  }
};

CatalogCtrl.$inject = ['catalogService', 'ordersService'];
