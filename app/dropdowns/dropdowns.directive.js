const dropdown = function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/dropdown.html',
    controller: 'DropdownsCtrl',
    controllerAs: 'dropdowns',
    scope: {
      title: '@',
      menu: '='
    },
    bindToController: true
  };
};

export default dropdown;
