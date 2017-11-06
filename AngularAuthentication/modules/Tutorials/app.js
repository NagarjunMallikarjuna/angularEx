var myApp = angular.module("myModule", []);
var myController = function($scope) {
	$scope.message = 'angular tutorial';
	var employee = {
		firstName : "Nagarjun",
		lastName : "Mallikarjuna",
		gender : "Male"
	};
	$scope.employee = employee;

	var country = {
		name : "USA",
		capital : "Washington D C",
		flag : "usa.png"
	};
	$scope.country = country;

	var employees = [
		{
			firstName : "Ben",
			lastName : "Mastings",
			gender : "Male",
			salary : 55000
		},
		{
			firstName : "Mark",
			lastName : "Paul",
			gender : "Male",
			salary : 56000
		},
		{
			firstName : "Pam",
			lastName : "Macintosh",
			gender : "Female",
			salary : 57000
		},
		{
			firstName : "Todd",
			lastName : "Barber",
			gender : "Male",
			salary : 58000
		}
	];
	$scope.employees = employees;

	var countries = [
		{
			name : "UK",
			cities : [
				{
					name : "London"
				},
				{
					name : "Manchester"
				},
				{
					name : "Birmingham"
				}
			]
		},
		{
			name : "USA",
			cities : [
				{
					name : "Los Angeles"
				},
				{
					name : "Chicago"
				},
				{
					name : "Houston"
				}
			]
		},
		{
			name : "India",
			cities : [
				{
					name : "Bangalore"
				},
				{
					name : "Chennai"
				},
				{
					name : "Mumbai"
				}
			]
		}
	];
	$scope.countries = countries;

	var technologies = [
		{
			name : "c++",
			likes : 0,
			dislikes : 0
		},
		{
			name : "Java",
			likes : 0,
			dislikes : 0
		},
		{
			name : "Angular",
			likes : 0,
			dislikes : 0
		},
		{
			name : "Python",
			likes : 0,
			dislikes : 0
		}
	];
	$scope.technologies = technologies;

	$scope.incrementLikes = function(technology) {
		technology.likes++;
	}
	$scope.incrementDisLikes = function(technology) {
		technology.dislikes++;
	}

	var employeesDetails = [
		{
			name : "Ben",
			dateOfBirth : new Date("November 23, 1980"),
			gender : "Male",
			salary : 50000
		},
		{
			name : "Sara",
			dateOfBirth : new Date("May 03, 1990"),
			gender : "Male",
			salary : 54000
		},
		{
			name : "Mark",
			dateOfBirth : new Date("August 09, 1986"),
			gender : "Female",
			salary : 56000
		},
		{
			name : "Pam",
			dateOfBirth : new Date("October 19, 1994"),
			gender : "Male",
			salary : 59000
		},
		{
			name : "Todd",
			dateOfBirth : new Date("December 30, 1999"),
			gender : "Female",
			salary : 60000
		}
	];
	$scope.employeesDetails = employeesDetails;
	$scope.rowLimit = 3;
	$scope.sortColumn = 'name';
	$scope.reverseSort = false;

	$scope.sortData = function(column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}

	$scope.getSortClass = function(column) {
		if ($scope.sortColumn == column) {
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
		}
		return '';
	}

	//handling the multiple search values on different column
	$scope.search = function(item) {
		if ($scope.searchText == undefined) {
			return true;
		} else {
			if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
				return true;
			}
		}
		return false;
	}

	var empls = [
		{name:'Ben',gender:1, salary:55000},
		{name:'Sara',gender:2, salary:68000},
		{name:'Mark',gender:1, salary:53000},
		{name:'Pam',gender:2, salary:60000},
		{name:'Todd',gender:3, salary:60000}
	];
	$scope.empls = empls;
}
myApp.controller('myController', myController);
myApp.filter('gender', function(){
	return function(gender){
		switch(gender){
		case 1:
			return "Male";
		case 2:
			return "Female";
		case 3:
			return "Not disclosed";
		}
	}
});


//https://www.youtube.com/watch?v=ynzFB2TOZCo&index=16&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl