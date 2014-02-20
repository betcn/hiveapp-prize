'use strict';

/* global Application */

var SearchController = function($scope, Games) {
    $scope.searchOptions = ['address', 'txid', 'gameid'];
    $scope.search = "";
    $scope.searchType = "address";

    $scope.results = {};

    $scope.error = "";
    $scope.message = "Enter search in the field above";

    var handleError = function(err) {
        $scope.message = "";
        $scope.error = err.message || err.data;
    };

    $scope.addressSearch = function() {
        Games.addressSearch({search: $scope.search}, function(results) {
            $scope.results.address = results;
            $scope.message = "";
        }, handleError);
    };

    $scope.txidSearch = function() {
        Games.txidSearch({search: $scope.search}, function(results) {
            $scope.results.txid = results;
            $scope.message = "";
        }, handleError);
    };

    $scope.gameidSearch = function() {
        Games.get({game: $scope.search}, function(results) {
            $scope.results.gameid = results;
            $scope.message = "";
        }, handleError);
    };

    $scope.executeSearch = function() {
        $scope.message = "Searching";
        $scope.error = "";
        $scope[$scope.searchType + 'Search']();
    };
};

Application.Controllers.controller('SearchController', ['$scope', 'Games', SearchController]);
