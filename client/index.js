'use strict';

angular.module('blog', ['firebase'])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home',{url: '/', templateUrl: /views/home/home.html})
}]);
