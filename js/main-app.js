var MainApp = angular.module('MainApp', ['ngMaterial', 'ngRoute']);

MainApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/doctors', {
            templateUrl: 'partials/doc-list.html',
            controller: 'DoctorsList'
        }).
        when('/doctors/:docId', {
            templateUrl: 'partials/doc-detail.html',
            controller: 'DoctorDetail'
        }).
        otherwise({
            redirectTo: '/doctors'
        });
    }
]);


MainApp.controller("DoctorsList", ["$scope", "$http",
    function($scope, $http) {
        $http.get('http://localhost:8080/api/doctor').success(function(data) {
            $scope.doctors = data;
        });

    }
]);
