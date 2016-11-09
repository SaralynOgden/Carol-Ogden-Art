export default class CatalogService {
  constructor($http, dropdownsSvc) {
    this.medium = 'any';
    this.dimensions = 'any';
    this.theme = 'any';
    this.type = 'any';
    $http.get('/api/works')
      .then((works) => {
        this.works = works.data;
      })
      .catch((err) => {
        throw err;
      })
  }

  setGalleryFilters(filter, title, option) {
    if(filter) {
      this[title] = option;
    } else {
      this[title] = 'any';
    }
  }
}

CatalogService.$inject = ['$http', 'dropdownsService'];
