import angular from 'angular';

import uiRouter from 'angular-ui-router';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

import AccountModalCtrl from './modal/account-modal.controller';
import GalleryModalCtrl from './modal/gallery-modal.controller';

import SidebarCtrl from './sidebar/sidebar.controller';

import DropdownsCtrl from './dropdowns/dropdowns.controller';
import DropdownsService from './dropdowns/dropdowns.service';
import dropdown from './dropdowns/dropdowns.directive';

import OrderCtrl from './order/order.controller';

angular.module('art-app', [uiRouter])
       .directive('dropdown', dropdown)
       .config(['$stateProvider', ($stateProvider) => {
         $stateProvider
         .state('gallery', {
           url: '/',
           templateUrl: 'views/gallery.html'
         })
         .state('checkout', {
           url: '/checkout',
           templateUrl: 'views/checkout.html',
           controller: 'OrderCtrl',
           controllerAs: 'order'
         })
       }])
       .service('cartService', CartService)
       .service('catalogService', CatalogService)
       .service('dropdownsService', DropdownsService)
       .controller('CatalogCtrl', CatalogCtrl)
       .controller('CartCtrl', CartCtrl)
       .controller('AccountModalCtrl', AccountModalCtrl)
       .controller('GalleryModalCtrl', GalleryModalCtrl)
       .controller('SidebarCtrl', SidebarCtrl)
       .controller('DropdownsCtrl', DropdownsCtrl)
       .controller('OrderCtrl', OrderCtrl);
