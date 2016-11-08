export default class CatalogCtrl {
  constructor(catalogSvc) {
    catalogSvc.getWorks()
      .then((works) => {
        this.works = works;
      })
      .catch((err) => console.log(err));
  }
};

CatalogCtrl.$inject = ['catalogService'];
