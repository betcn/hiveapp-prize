'use strict';

/* global Application */

Application.Directives.directive('gamedetail', function () {
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'js/templates/game-detail.html',
        scope: {
            gamedata: '='
        }
    };
});

