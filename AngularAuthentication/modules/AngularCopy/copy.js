/**
 * http://usejsdoc.org/
 */
angular.module("copyExample", []).controller("ExampleController", ["$scope",function($scope) {
	$scope.master = {};
	$scope.reset = function(){
		$scope.user = angular.copy($scope.master);
	};
	
	$scope.update = function(user){
		angular.copy(user, $scope.master);
	};
	
	$scope.reset();
}]);