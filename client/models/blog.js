'use strict';

angular.module('blog')
.factory('Post', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray) {
	// this is the module that interacts with firebase to manipulate blog posts
  var fbPosts;
  var afPosts;

  // WE USE INIT SO THAT IF THE ACTIVE USER CHANGES THEN ANY TASKS WILL BE PROPERLY ASSIGNED
  function init() {
    fbPosts = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/posts');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }

  function add(post) {
    return afPosts.$add(post);
  }

	return {init: init, add: add};
}]);
