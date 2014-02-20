'use strict';

/* global Application */

var HistoryController = function($scope, Games) {

    $scope.games = [];
    Games.history({omitBets: true}, function(games) {
        $scope.games = games;
    });


    $scope.$on('all-games-update', function(event, games) {
        var now = new Date();
        var currentGames = {};
        games.forEach(function(gamedata) {
            currentGames[gamedata._id] = gamedata;
        });
        $scope.games.forEach(function(gamedata, index) {
            if (currentGames[gamedata._id]) {
                $scope.games[index] = gamedata;
            } else if (new Date(gamedata.end) < now) {
                if (gamedata.betCount > 0 && (!gamedata.payout || !gamedata.payout.sent)) {
                    Games.get({game: gamedata._id}, function(game) {
                        $scope.games[index] = game;
                    });
                }
            }
        });
    });
};

Application.Controllers.controller('HistoryController', ['$scope', 'Games', HistoryController]);

