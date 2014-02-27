'use strict';

/* global Application */

var NavController = function($scope, $location) {
    $scope.showHistoryNav = false;
    $scope.getActive = function(path) {
        $scope.showHistoryNav = (/\/game\/[0-9]{1,2}/).test($location.path());
        if(path === $location.path()){
            return 'active';
        } else if (path === '/game' && (/\/game\/[0-9]{1,2}/).test($location.path())) {
            $scope.showHistoryNav = true;
            return 'active';
        } else if (path === '/' && $location.path() === '/buy-tickets') {
            return 'active';
        } else {
            return '';
        }
    };
};

Application.Controllers.controller('NavController', ['$scope', '$location', NavController]);
