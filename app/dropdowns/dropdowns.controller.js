export default class DropdownsCtrl {
  constructor(dropdownsSvc, catalogSvc) {
    this.medium = dropdownsSvc.medium;
    this.price = dropdownsSvc.price;
    this.dimensions = dropdownsSvc.dimensions;
    this.theme = dropdownsSvc.theme;
    this.catalogSvc = catalogSvc;
  }

  toggleOptionSelected(title, $index) {
    const filterItems = this[title].menuItems;
    filterItems[$index].selected = !filterItems[$index].selected;
    for (let i = 0; i < this[title].menuItems.length; i++) {
      if (i != $index) {
        this[title].menuItems[i].selected = false;
      }
    }
    this.catalogSvc.setGalleryFilters(filterItems[$index].selected, title, filterItems[$index].option)
  }

  toggleMenu($event, title) {
    if ($event.target === $event.currentTarget) {
      this[title].dropdownSelected = !this[title].dropdownSelected;
    }
  }
};

DropdownsCtrl.$inject = ['dropdownsService', 'catalogService'];
