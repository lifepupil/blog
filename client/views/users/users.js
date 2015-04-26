'use strict';

angular.module('blog')

.controller('UsersCtrl', ['$scope', 'User', '$state', function($scope, User, $state) {
  console.info ('state is', $state.current.name);
  $scope.name = $state.current.name;

  $scope.submit = function(user) {
      User.login(user)
      .catch(function(err) {
        console.error(err);
      });
  };
}]);
