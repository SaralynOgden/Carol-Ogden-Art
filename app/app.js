import angular from 'angular';

import uiRouter from 'angular-ui-router';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import CartCtrl from './cart/cart.controller';
import OrdersService from './cart/cart.service';

import ModalCtrl from './modal/modal.controller';

import SidebarCtrl from './sidebar/sidebar.controller'

angular.module('art-app', [uiRouter])
       .config(['$stateProvider', ($stateProvider) => {
         $stateProvider
         .state('gallery', {
           url: '/gallery',
           templateUrl: 'views/gallery.html'
         })
         .state('home', {
           url: '',
           templateUrl: 'views/home.html'
         });
       }])
       .service('ordersService', OrdersService)
       .service('catalogService', CatalogService)
       .controller('CatalogCtrl', CatalogCtrl)
       .controller('CartCtrl', CartCtrl)
       .controller('ModalCtrl', ModalCtrl)
       .controller('SidebarCtrl', SidebarCtrl);
