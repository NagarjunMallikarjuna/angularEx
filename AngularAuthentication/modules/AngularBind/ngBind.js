/**
 * http://usejsdoc.org/
 */
var app = angular.module("ngBindExample",[]);  //'ngSanitize'

app.controller("ngBindController", ["$scope",function($scope) {
	$scope.name = "Harsha";
}]);

app.controller("ngBindHtmlCtrl" , ['$scope', function($scope){
	$scope.myHtml = 'I am an <code>HTML</code>string with '+
	'<a href="#">links!</a> and other <em>stuff</em>';
}]);

app.controller("ngTemplateCtrl",['$scope',function($scope){
	$scope.saluation = "Hello";
	$scope.name = "World";
}]);

app.controller("ngChangeCtrl",['$scope',function($scope){
	$scope.counter = 0;
	$scope.change = function(){
		$scope.counter ++;
	};
}]);