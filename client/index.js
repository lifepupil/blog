'use strict';

angular.module('blog', ['firebase', 'ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{url: '/', templateUrl: '/views/home/home.html'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('blogPage', {url: '/blog', templateUrl: '/views/blog/blog.html', controller: 'BlogCtrl'});
}])

.run(['$rootScope','$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl) {
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
