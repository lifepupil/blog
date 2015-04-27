'use strict';

angular.module('blog')
.controller('BlogCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.afPosts = Post.init();

	// console.log(Post)
	$scope.addPost = function(post) {
		console.log(post);


		Post.add(post)
		.then(function(data) {
			$scope.post = {};
		});
	};
}]);
