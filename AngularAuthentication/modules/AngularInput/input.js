/**
 * http://usejsdoc.org/
 */
angular.module('inputExample',[]).
controller('inputController',['$scope',function($scope){
	$scope.user = {name:'guest', last:'visitor'};
}])
.controller('checkboxController', ['$scope', function($scope) {
	$scope.checkboxModel = {
			value1: true,
			value2: 'YES'
	};
}]);