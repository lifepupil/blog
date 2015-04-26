'use strict';

angular.module('blog', ['firebase'])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home',{url: '/', templateUrl: '/views/home/home.html'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});

}]);
