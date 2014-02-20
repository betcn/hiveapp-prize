'use strict';

/* global Application, bitcoin */

var GameTableController = function($scope) {


    /*BetAddresses.get({}, function(data) {
        for(var i in data) {
            if (data.hasOwnProperty(i)) $scope.addresses[data[i]] = i;
        }
    });*/
    $scope.$watch('gamedata', function(newValue) {
        if (newValue) {
          $scope.betAddress = $scope.gamedata.game;
        }
    });

    $scope.cupimages = {
        15: "img/betcoin_prize_diamond_trophy.png",
        9: "img/betcoin_prize_platinum_trophy.png",
        7: "img/betcoin_prize_gold_trophy.png",
        3: "img/betcoin_prize_silver_trophy.png",
        1: "img/betcoin_prize_bronze_trophy.png"
    };

    $scope.sendBitcoins = function(address, label) {
      bitcoin.sendMoney(address + '?Label=' + label);
    };


    $scope.gameStatus = function(gamedata) {
        if (gamedata === undefined) { return ''; }
        if (!gamedata.payout) {
            var now = new Date();
            if (new Date(gamedata.start) < now && new Date(gamedata.end) > now) {
                return 'current';
            } else {
                return gamedata.totalPayout ? 'processing' : '';
            }
        } else if (gamedata.payout.sent) {
            return 'paid';
        } else if (gamedata.payout.prepared && !gamedata.payout.sent) {
            return 'pending';
        } else {
            return '';
        }
    };

    $scope.rowClass = function(gamedata) {
        if (gamedata === undefined) { return ''; }
        if (!gamedata.payout) {
            if (new Date(gamedata.start) < $scope.now && new Date(gamedata.end) > $scope.now) {
                return 'warning';
            } else {
                return gamedata.totalPayout ? 'active' : '';
            }
        } else if (gamedata.payout.sent) {
            return '';
        } else {
            return 'success';
        }
    };
};

Application.Directives.directive('gametable', function () {
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'js/templates/game-table.html',
        scope: {
            gamedata: '='
        },
        controller: ['$scope', 'BetAddresses', GameTableController]
    };
});

