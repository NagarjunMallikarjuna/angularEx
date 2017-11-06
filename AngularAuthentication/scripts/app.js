/**
 * http://usejsdoc.org/
 */
//https://github.com/cornflourblue/angular-authentication-example
'use strict';

angular.module('Authentication',[]);
angular.module('Home',[]);

angular.module('BasicHttpAuthExample',[
	'Authentication',
	'Home',
	'ngRoute',
	'ngCookies'
])

.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/login',{
			controller:'LoginController',
			templateUrl:'modules/authentication/views/login.html'
		})
		
		.when('/',{
			controller:'HomeController',
			templateUrl:'modules/home/views/home.html'
		})
		
		.otherwise({redirectTo:'/login'});
}])

.run(['$rootScope', '$location', '$cookieStore', '$http', function($rootScope, $location, $cookieStore, $http){
	$rootScope.globals  = $cookieStore.get('globals')||{};
	if($rootScope.globals.currentUser){
		$http.defaults.headers.commons['Authentication'] = 'Basic' +$rootScope.globals.currentUser.authdata;
	}
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            $location.path('/login');
        }
    });
}]);

