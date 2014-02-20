'use strict';

/* global Application */

var GameDataController = function($scope, $routeParams, Games) {

    $scope.game = parseInt($routeParams.game, 10);
    $scope.recent = [];
    $scope.getRecent = function(limit) {
        Games.recent({game: $scope.game, limit: limit}, function(games) {
            if (limit < 0) {
                $scope.recent = games;
            } else {
                $scope.recent = games.concat($scope.recent.slice(limit, $scope.recent.length));
            }
        });
    };

    Games.current({game: $scope.game}, function(current) {
        $scope.current = current;
        $scope.currentTable = [current];
    });

    $scope.$on('game-update', function(event, game, gameData) {
        if (game === $scope.game) {
            $scope.current = gameData;
            if ($scope.recent.length && $scope.recent[0]._id === gameData._id) {
                $scope.recent[0] = gameData;
                var now = new Date();
                $scope.recent.forEach(function(gamedata, index) {
                    if (new Date(gamedata.end) < now) {
                        if (!gamedata.payout || !gamedata.payout.sent) {
                            Games.get({game: gamedata._id}, function(game) {
                                $scope.recent[index] = game;
                            });
                        }
                    }
                });
            } else {
                $scope.getRecent(-1);
            }
        }
    });

};

Application.Controllers.controller('GameDataController', ['$scope', '$routeParams', 'Games', GameDataController]);
