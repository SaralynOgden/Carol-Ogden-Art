import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LoginBtnCtrl from './buttons/login-btn.controller';
import LogoutBtnCtrl from './buttons/logout-btn.controller';
import RegisterBtnCtrl from './buttons/register-btn.controller';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import DropdownsCtrl from './dropdowns/dropdowns.controller';
import dropdown from './dropdowns/dropdowns.directive';
import DropdownsService from './dropdowns/dropdowns.service';

import LoginFormCtrl from './forms/login-form.controller';
import RegisterFormCtrl from './forms/register-form.controller';

import LoginCtrl from './login/login.controller';
import LoginService from './login/login.service';

import GalleryModalCtrl from './modal/gallery-modal.controller';
import LoginModalService from './modal/login-modal.service';
import RegisterModalService from './modal/register-modal.service';

import RegisterService from './register/register.service';

import OrderCtrl from './order/order.controller';
import OrderService from './order/order.service';

import OrdersCtrl from './orders/orders.controller';
import OrdersService from './orders/orders.service';

import SidebarCtrl from './sidebar/sidebar.controller';

import UserMenuCtrl from './user-menu/user-menu.controller';

angular.module('art-app', [uiRouter])
       .directive('dropdown', dropdown)
       .config(['$stateProvider', ($stateProvider) => {
         $stateProvider
         .state('home', {
           url: '',
           templateUrl: 'views/gallery.html'
         })
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
         .state('orders', {
           url: '/orders',
           templateUrl: 'views/orders.html'
         })
       }])
       .service('cartService', CartService)
       .service('catalogService', CatalogService)
       .service('dropdownsService', DropdownsService)
       .service('loginService', LoginService)
       .service('loginModalService', LoginModalService)
       .service('registerModalService', RegisterModalService)
       .service('registerService', RegisterService)
       .service('orderService', OrderService)
       .service('ordersService', OrdersService)
       .controller('LoginBtnCtrl', LoginBtnCtrl)
       .controller('LogoutBtnCtrl', LogoutBtnCtrl)
       .controller('RegisterBtnCtrl', RegisterBtnCtrl)
       .controller('CartCtrl', CartCtrl)
       .controller('CatalogCtrl', CatalogCtrl)
       .controller('DropdownsCtrl', DropdownsCtrl)
       .controller('LoginFormCtrl', LoginFormCtrl)
       .controller('RegisterFormCtrl', RegisterFormCtrl)
       .controller('LoginCtrl', LoginCtrl)
       .controller('GalleryModalCtrl', GalleryModalCtrl)
       .controller('UserMenuCtrl', UserMenuCtrl)
       .controller('OrderCtrl', OrderCtrl)
       .controller('OrdersCtrl', OrdersCtrl)
       .controller('SidebarCtrl', SidebarCtrl)
       .controller('UserMenuCtrl', UserMenuCtrl);
