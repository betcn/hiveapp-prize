'use strict';

/* global Application */

var GameTotalsController = function($scope, Totals) {
    var update = function() {
        var query = {};
        if ($scope.game !== 'all') {
            query = {game: $scope.game};
        }
        Totals.get(query, function(data) {
            $scope.totals =  data;
        });
    };

    $scope.$on('all-games-update', function() {
        update();
    });

    $scope.$on('exchange-update', function(event, rate) {
        $scope.exchange = rate;
    });

};

Application.Directives.directive('gametotals', function () {
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'js/templates/totals.html',
        scope: {
            game: '=',
        },
        controller: ['$scope', 'Totals', GameTotalsController]
    };
});

