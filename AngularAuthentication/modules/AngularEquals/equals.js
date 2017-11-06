/**
 * http://usejsdoc.org/
 */

angular.module("equalsExample",[]).controller("equalsController", ['$scope',function($scope) {
	$scope.user1 = {};
	$scope.user2 = {};
	$scope.compare = function(){
		$scope.result = angular.equals($scope.user1, $scope.user2);
	};
}]);
