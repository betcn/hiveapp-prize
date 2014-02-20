'use strict';

/* global Application */
/* global angular */

var CurrentGameData = function($rootScope, Games, games) {
    this.gameData = [];
    this.games = games;
    this.isUpdating = false;
    this.updateCurrent = function() {
        if (this.isUpdating) { return; }
        this.isUpdating = true;
        this.gameData = [];
        var gamesCopy = angular.copy(games);
        var self = this;
        var looper = function() {
            var game = gamesCopy.shift();
            Games.current({game: game}, function(data) {
                //var prizehash = {
                    //1:"bronze",
                    //3:"silver",
                    //7:"gold",
                    //9:"platinum",
                    //15:"diamond"
                //}; FIXME: should be removed?
                self.gameData.push(data);
                $rootScope.$broadcast('game-update', game, data);
                if (gamesCopy.length) {
                    looper();
                } else {
                    self.isUpdating = false;
                    $rootScope.$broadcast('all-games-update', self.gameData);
                }
            });
        };
        looper();
    };

    this.updateCurrent();
    var self = this;
    setInterval(function() {
        self.updateCurrent();
    }, (60 * 1000));
};

Application.Services.value('games', [1, 3, 7, 9, 15]);

Application.Services.service('CurrentGameData', ['$rootScope', 'Games', 'games', CurrentGameData]);
