'use strict';

/* global Application */

var AddressesController = function($scope) {
    $scope.showHistoryNav = false;
};

Application.Controllers.controller('AddressesController', ['$scope', '$location', 'BetAddresses', AddressesController]);
