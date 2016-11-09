export default class CatalogCtrl {
  constructor(catalogSvc) {
    this.catalogSvc = catalogSvc;
  }

  getGalleryFilters(work) {
    return ((work.medium === this.catalogSvc.medium || this.catalogSvc.medium === 'any') &&
            (work.type === this.catalogSvc.type || this.catalogSvc.type === 'any') &&
            (work.dimensions === this.catalogSvc.dimensions || this.catalogSvc.dimensions === 'any') &&
            (work.theme === this.catalogSvc.theme || this.catalogSvc.theme === 'any'));
  }

  getWorks() {
    return this.catalogSvc.works;
  }
};

CatalogCtrl.$inject = ['catalogService'];
