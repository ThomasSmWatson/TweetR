var app = angular.module('mainApp',['ngRoute','ngAnimate']);


app.controller('mainController',['$scope','$http',function($scope,$http){
	

	$http.get('/posts/global')
	.then(function(res){$scope.posts = res.data;});
	$scope.submitData = function(data){
		var post = $http.post('/posts/global',data);
		post.success(function(data,status,headers,config){
			console.log(data);
			console.log(status);
			$http.get('/posts/global')
			.then(function(res){$scope.posts = res.data;});
		});
	}
}]);