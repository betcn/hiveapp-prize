'use strict';

/* global Application */

Application.Directives.directive('historytable', function () {
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'js/templates/history-table.html',
        scope: {
            games: '='
        },
        link: function(scope) {
            scope.now = new Date();
            // update the current time every minute
            setInterval(function() {
                scope.$apply(function() {
                    scope.now = new Date();
                });
            }, 60000);
            window.htable = scope;

            scope.gameStatus = function(gamedata) {
                if (!gamedata.payout) {
                    if (new Date(gamedata.start) < scope.now && new Date(gamedata.end) > scope.now) {
                        return 'current';
                    } else {
                        return '';
                    }
                } else if (gamedata.payout.sent) {
                    return 'paid';
                } else if (gamedata.payout.prepared && !gamedata.payout.sent) {
                    return 'pending';
                } else {
                    return '';
                }
            };

            scope.rowClass = function(gamedata) {
                if (!gamedata.payout) {
                    if (new Date(gamedata.start) < scope.now && new Date(gamedata.end) > scope.now) {
                        return 'warning';
                    } else {
                        return '';
                    }
                } else if (gamedata.payout.sent) {
                    return 'success';
                } else {
                    return 'danger';
                }
            };
        }
    };
});

