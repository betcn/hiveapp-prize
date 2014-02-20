'use strict';

/* global Application */

var GameCounterController = function($scope, $rootScope) {

    $scope.timers = {};
    $scope.exchange = $rootScope.exchange;
    $scope.$on('exchange-update', function(event, rate) {
        $scope.exchange = rate;
    });

    setInterval(function() {
        $scope.$apply(function() {
            var game = $scope.gamedata;
            if (game.end === undefined) {
                $scope.timers[game.game] = "loading...";
            } else {
                var endDate = new Date(game.end);
                var endSec = endDate.getTime();
                var now = new Date();
                var nowSec = now.getTime(); // GMT!

                var timeUntilEnd = (endSec-nowSec)/1000;
                var days = Math.floor(timeUntilEnd/86400);
                var todaySecLeft = timeUntilEnd%86400;

                var hours = Math.floor(todaySecLeft/3600);
                var hourSecLeft = todaySecLeft%3600;

                var minutes = Math.floor(hourSecLeft/60);
                var minSecLeft = Math.floor(hourSecLeft%60);
                //console.log(todaySec);
                var seconds = Math.floor(minSecLeft);

                days = Math.max(0, days);
                hours = Math.max(0, hours);
                minutes = Math.max(0, minutes);
                seconds = Math.max(0, seconds);
                if(hours < 10) {
                    hours = "0"+hours;
                }if(minutes < 10) {
                    minutes = "0"+minutes;
                }if(seconds < 10) {
                    seconds = "0"+seconds;
                }
                var timeString = hours+":"+minutes+":"+seconds;

                $scope.timers[game.game] = {daysLeft:days,timeString:timeString};
            }
        });
    }, 1000);

};

Application.Directives.directive('gamecounter', function () {
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'js/templates/game-counter.html',
        scope: {
            gamedata: '='
        },
        controller: ['$scope', '$rootScope', GameCounterController]
    };
});

