var app = angular.module('mainApp',[]);

app.controller('mainController',['$scope',function($scope){
	$scope.posts = [{
		author: 'Tom',
		title:'MaTitle',
		text:'BLABABABABABA'
	},{
		author: 'Tim',
		title:'PostNo2',
		text:'Lots of god dam text!'
	},{
		author: 'Sally',
		title:'Oh god i\'m so ugly!',
		text:'#ClassicLass'
	}];
}]);