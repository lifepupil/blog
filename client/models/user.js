// job of this factory to talk to Firebase

'use strict';

angular.module('blog')
.factory('User', ['$rootScope', function($rootScope) {
  console.log('user factory loaded');

  function login(user) {
    console.log('login');
    return $rootScope.afAuth.$authWithPassword(user);
  }

  function logout() {
    console.log('logout');
    return $rootScope.afAuth.$unauth();
  }

  return {login: login, logout: logout};
}]);
