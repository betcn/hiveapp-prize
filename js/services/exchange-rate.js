'use strict';

/* global Application */

var BTCExchangeRate = function($rootScope, Exchange) {
    this.rate = 0;
    var self = this;
    this.update = function() {
        Exchange.get({}, function(data) {
            self.rate = data.ask;
            //console.log(self.rate);
            $rootScope.exchange = self.rate;
            $rootScope.$broadcast('exchange-update', self.rate);
        });
    };
    this.update();
    setInterval(this.update, (10 * 60 * 1000));
};

Application.Services.service('BTCExchangeRate', ['$rootScope', 'Exchange', BTCExchangeRate]);
