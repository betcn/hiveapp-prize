'use strict';

/* global Application */

var api = "https://p-api.betcoin.tm\\:8443";

Application.Services.factory('Games', ['$resource', function($resource) {
    return $resource(api + '/games/:game/:search', {}, {
        current: {
            method: "GET",
            params: { search: "current" }
        },
        recent: {
            method: "GET",
            params: { search: "recent" },
            isArray: true
        },
        addressSearch: {
            method: "GET",
            params: { game: "address" },
            isArray: true
        },
        txidSearch: {
            method: "GET",
            params: { game: "txid" },
            isArray: true
        },
        history: {
            method: "GET",
            params: { search: 'history', game: 'all' },
            isArray: true
        }
    });
}]);

Application.Services.factory('Totals', ['$resource', function($resource) {
    return $resource(api + '/games/totals/:game');
}]);

Application.Services.factory('Exchange', ['$resource', function($resource) {
    return $resource(api + '/exchangerate');
}]);

Application.Services.factory('BetAddresses', ['$resource', function($resource) {
    return $resource(api + '/addresses');
}]);
