'use strict';

/* global Application */

var GameDetailController = function($scope, $routeParams, Games) {
    $scope.gameId = $routeParams.gameId;
    $scope.$on('game-update', function(event, game, gameData) {
        if (gameData._id === $scope.gameId) {
            $scope.gamedata = gameData;
        }
    });
    Games.get({game: $scope.gameId}, function(gameData) {
        $scope.gamedata = gameData;
    });
};

Application.Controllers.controller('GameDetailController', ['$scope', '$routeParams', 'Games', GameDetailController]);
