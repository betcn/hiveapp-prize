'use strict';

/* global Application, bitcoin */

var HomeController = function($scope) {

    $scope.currentGames = [
        {game:1,address:"1Prize1WfNVLyQFF3rmwFGkrmBMrgtBZYo"},
        {game:3,address:"1Prize3bEpEbd7SMcRBJ7nQ8bhPi2ja761"},
        {game:7,address:"1Prize7FUmAQxpq9zLaahCYU9gwCrsh5jD"},
        {game:9,address:"1Prize9L4ytBsqTNt1MDWtC8BW6kyNgcDJ"},
        {game:15,address:"1Priz15xwtKd9Ahb2XMoi4Q79sbQWt5dNT"}
    ];

    $scope.sendBitcoins = function(address, label) {
      bitcoin.sendMoney(address + '?label='+label);
    };

    $scope.$on('all-games-update', function(event, gameData) {
        //turn it around backwards
        var gameDataTemp = [gameData[4],gameData[3],gameData[2],gameData[1],gameData[0]];

        gameDataTemp[0].game = 15;
        gameDataTemp[1].game = 9;
        gameDataTemp[2].game = 7;
        gameDataTemp[3].game = 3;
        gameDataTemp[4].game = 1;

        gameDataTemp[0].address = "1Priz15xwtKd9Ahb2XMoi4Q79sbQWt5dNT";
        gameDataTemp[1].address = "1Prize9L4ytBsqTNt1MDWtC8BW6kyNgcDJ";
        gameDataTemp[2].address = "1Prize7FUmAQxpq9zLaahCYU9gwCrsh5jD";
        gameDataTemp[3].address = "1Prize3bEpEbd7SMcRBJ7nQ8bhPi2ja761";
        gameDataTemp[4].address = "1Prize1WfNVLyQFF3rmwFGkrmBMrgtBZYo";

        $scope.currentGames = gameDataTemp;
    });
    $scope.$on('exchange-update', function(event, rate) {
        $scope.exchange = rate;
    });
};


Application.Controllers.controller('HomeController', ['$scope', HomeController]);
