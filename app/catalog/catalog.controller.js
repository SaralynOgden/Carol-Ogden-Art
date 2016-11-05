export default class CatalogCtrl {
  constructor(catalogSvc, ordersSvc) {
    this.catalogSvc = catalogSvc;
    this.ordersSvc = ordersSvc;
    catalogSvc.getWorks()
      .then((works) => {
        console.log(works);
        this.works = works;
      })
      .catch((err) => console.log(err));
  }
};

CatalogCtrl.$inject = ['catalogService', 'ordersService'];
