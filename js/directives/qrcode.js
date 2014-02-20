'use strict';

/* global Application */

var QRController = function($scope, $http) {
    $scope.dataURI = "";
    $scope.$watch('address', function(newValue) {
        if (newValue) {
            $http({
                method: 'GET',
                url: 'https://m-sock.betcoin.tm:8444/qrcode/' + $scope.address
            }).success(function(data) {
                $scope.dataURI = data;
            }).error(function(err) {
                console.log(err);
            });
        }
    });
};

Application.Directives.directive('qrcode', function () {
    return {
        restrict: 'EAC',
        replace: true,
        template: '<img ng-src="{{dataURI}}" />',
        scope: {
            address: '='
        },
        controller: ['$scope', '$http', QRController]
    };
});

