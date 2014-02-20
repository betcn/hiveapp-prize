/* global io, PrizesController */

(function () {
    "use strict";

  Application.Services.factory("$socket", [
    "$rootScope", "Prize", "socketDomain", function($rootScope, Prize, socketDomain) {
      var $socket;
      $socket = io.connect(window.location.protocol + socketDomain.hostname + ":"+socketDomain.port);
      $socket.on("connect", function() {
        return console.log("someone connected!");
      });
      $socket.on("message", function(message) {
        console.log(message);
      });
      $socket.on("onPrizeAdded", function(prize) {
        var scope;
        console.log("onPrizeAdded called", prize);
        scope = PrizesController.getScope();
        return scope.$apply(function() {
          return scope.newPrize(prize);
        });
      });
      $socket.on("totalPrizeUpdate", function(data) {
        var scope;
        scope = PrizesController.getScope();
        return scope.$apply(function() {
          scope.exchange = data.exchange;
          scope.totalUSD = Math.round(data.exchange*data.sum);
          scope.totalPrize = data.count;
          scope.totalBitcoin = Math.round(data.sum);
          scope.recentBets0 = data.recent[0];
          scope.recentBets1 = data.recent[1];
          scope.recentBets2 = data.recent[2];
          scope.recentBets3 = data.recent[3];
          scope.recentBets4 = data.recent[4];
          scope.recentBets0B = data.recentB[0];
          scope.recentBets1B = data.recentB[1];
          scope.recentBets2B = data.recentB[2];
          scope.recentBets3B = data.recentB[3];
          scope.recentBets4B = data.recentB[4];
        });
      });
      return $socket.on("disconnect", function() {
        console.log("someone disconnected");
        $socket.emit("sessionCleared");
        return $socket.removeListener("connect");
      });
    }
  ]);

}());
