'use strict';

angular.module('blog')
.controller('BlogCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.afPosts = Post.init();


	$scope.addPost = function(post) {
		Post.add(post)
		.then(function(data) {
			$scope.post = {};
		});
	};
}]);
