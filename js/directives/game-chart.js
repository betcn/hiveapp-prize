
'use strict';

/* global Application */

var COIN = 100000000;

var GameChartController = function($scope) {
    var parseSeries = function(gamedata) {
        var payoutSeries = {
            name: "jackpot",
            id:"jackpot",
            data: []
        };
        var ticketSeries = {
            name: "bets",
            id:"bets",
            yAxis: 1,
            type: 'column',
            data: []
        };
        var totalPayout = 0;
        gamedata.bets.forEach(function(bet) {
            totalPayout += bet.toPayout;
            payoutSeries.data.push(totalPayout / COIN);
            ticketSeries.data.push(bet.tickets);
        });
        return [ticketSeries, payoutSeries];
    };

    $scope.chartConfig = {
        chart: {
            type: 'spline',
            width: 910
        },
        title: {
            text: 'Game Tickets per Bet/Jackpot'
        },
        plotOptions: {
            spline: {
                marker: { enabled: false }
            }
        },
        yAxis: [{
            title: {
                text: 'jackpot'
            }
        }, {
            title: {
                text: 'tickets purchased',
            },
            opposite: true
        }],
        series: []
    };

    $scope.$watch('gamedata', function(newValue) {
        if (newValue && newValue._id) {
          $scope.chartConfig.series = parseSeries(newValue);
        }
    });
};

Application.Directives.directive('gamechart', function () {
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'js/templates/game-chart.html',
        scope: {
            gamedata: '='
        },
        controller: ['$scope', GameChartController]
    };
});

