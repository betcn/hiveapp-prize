'use strict';

/* global Application */

var COIN = 100000000;

var HomeController = function($scope) {

    $scope.heading = "Current Games";

    $scope.$on('all-games-update', function(event, gameData) {
        $scope.currentGames = gameData;
        
        $scope.currentChart.series = getCurrentSeries();
    });

    var getCurrentSeries = function() {
        if ($scope.currentGames.length < 5) {
            return [];
        }
        var betSeries = {
            name: 'bets',
            id: 'bets',
            stack: 'bets',
            yAxis: 2,
            data: []
        };
        var ticketSeries = {
            name: 'tickets',
            id: 'tickets',
            stack: 'tickets',
            yAxis: 3,
            data: []
        };
        var payoutSeries = {
            name: 'payout',
            id: 'payout',
            stack: 'payout',
            data: []
        };
        var houseRakeSeries = {
            name: 'house rake',
            id: 'house rake',
            stack: 'rake',
            data: []
        };
        var affiliateRakeSeries = {
            name: 'affiliate rake',
            id: 'affiliate rake',
            stack: 'rake',
            data: []
        };
        var savingsRakeSeries = {
            name: 'savings rake',
            id: 'savings rake',
            stack: 'rake',
            data: []
        };

        $scope.currentGames.forEach(function(gameData) {
            betSeries.data.push(gameData.betCount);
            ticketSeries.data.push(gameData.ticketCount);
            payoutSeries.data.push(gameData.totalPayout / COIN);
            houseRakeSeries.data.push(gameData.totalHouseRake / COIN);
            affiliateRakeSeries.data.push(gameData.totalAffiliateRake / COIN);
            savingsRakeSeries.data.push(gameData.totalSavingsRake / COIN);
        });
        return [betSeries, ticketSeries, payoutSeries, houseRakeSeries, affiliateRakeSeries, savingsRakeSeries];
    };

    $scope.currentChart = {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Current Games'
        },
        xAxis: {
            categories: [1,3,7,9,15]
        },
        yAxis: [{
            title: {
                text: 'rake'
            }
        }, {
            title: {
                text: 'payout'
            }
        }, {
            title: {
                text: 'bets',
            },
            opposite: true
        }, {
            title: {
                text: 'tickets',
            },
            opposite: true
        }],
        tooltip: {
            formatter: function() {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + "<br/>" +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: { stacking: 'normal' },
            spline: { marker: { enabled: false } }
        },
        series: []
    };

    window.scope = $scope;
};

Application.Controllers.controller('HomeController', ['$scope', HomeController]);
