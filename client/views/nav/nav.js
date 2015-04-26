'use strict';

angular.module('blog')
.controller('NavCtrl', ['$scope', 'User', '$state', '$rootScope', function($scope, User, $state, $rootScope) {
  $scope.afAuth.$onAuth(function(data) {
		debugger;
    if (data) {
      $rootScope.activeUser = data;
    } else {
      $rootScope.activeUser = null;
    }
    // $state.go('home');
  });
  $scope.logout = function() {
    // THIS CALLS THE FUNCTION IN THE User FACTORY
    User.logout();
  };
}]);
