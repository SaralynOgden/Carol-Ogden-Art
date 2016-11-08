export default class DropdownsCtrl {
  constructor(dropdownsSvc) {
    this.medium = dropdownsSvc.medium;
    this.price = dropdownsSvc.price;
    this.dimensions = dropdownsSvc.dimensions;
    this.theme = dropdownsSvc.theme;
  }

  toggleOptionSelected(title, $index) {
    this[title].menuItems[$index].selected = !this[title].menuItems[$index].selected;
    if (title === 'price') {
      for (let i = 0; i < this.price.menuItems.length; i++) {
        if (i != $index) {
          this.price.menuItems[i].selected = false;
        }
      }
    }
  }

  toggleMenu($event, title) {
    if ($event.target === $event.currentTarget) {
      this[title].dropdownSelected = !this[title].dropdownSelected;
    }
  }

  //
  // mediumTransition($event) {
  //   if ($event.target === $event.currentTarget) {
  //     this.mediumStatus = !this.mediumStatus;
  //   }
  // }
  //
  // priceTransition($event) {
  //   if ($event.target === $event.currentTarget) {
  //     this.priceStatus = !this.priceStatus;
  //   }
  // }
  //
  // dimensionTransition($event) {
  //   if ($event.target === $event.currentTarget) {
  //     this.dimensionStatus = !this.dimensionStatus;
  //   }
  // }
  //
  // themeTransition($event) {
  //   if ($event.target === $event.currentTarget) {
  //     this.themeStatus = !this.themeStatus;
  //   }
  // }
  //
  // changeColor($index, category) {
  //   this[category][$index].style =
  //       this[category][$index].style === 'white' ? '#91a243':'white';
  //   if (category === 'prices') {
  //     for (let i = 0; i < this.prices.length; i++) {
  //       if (i != $index) {
  //         this.prices[i].style = 'white';
  //       }
  //     }
  //   }
  // }
};

DropdownsCtrl.$inject = ['dropdownsService'];
