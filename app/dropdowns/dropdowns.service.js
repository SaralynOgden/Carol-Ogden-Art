export default class DropdownsService {
  constructor() {
    this.medium = { dropdownSelected: false,
                  menuItems: [{option: 'oil', selected: false},
                   {option: 'pencil', selected: false},
                   {option: 'acrylic', selected: false},
                   {option: 'water color', selected: false}]};
    this.dimensions = { dropdownSelected: false,
                        menuItems: [{option: '5x5', selected: false},
                        {option: '8x8', selected: false}]};
    this.theme = { dropdownSelected: false,
                  menuItems: [{option: 'people', selected: false},
                   {option: 'small friends', selected: false},
                   {option: 'places', selected: false}]};
  }
};
