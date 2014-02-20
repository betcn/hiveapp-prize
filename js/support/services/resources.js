'use strict';

/* global Application */
/* global io */

var api = "<%= api.protocol %>://<%= api.host %>\\:<%= api.port %>";
var socket = "<%= socket.protocol %>://<%= socket.host %>:<%= socket.port %>";

Application.Services.factory("Dice", function($resource) {
    // We need to add an update method
    return $resource(api + "/dice/:id", {
        id: "@id"
    }, {
        newGame: {
            method: "POST"
        },
        recent: {
            method: 'GET',
            params: {
                type: 'recent'
            },
            isArray: true
        },
        unconfirmed: {
            method: 'GET',
            params: {
                type: 'unconfirmed'
            },
            isArray: true
        },
        big: {
            method: 'GET',
            params: {
                type: 'big'
            },
            isArray: true
        },
        rare: {
            method: 'GET',
            params: {
                type: 'rare'
            },
            isArray: true
        },
        leaderboard: {
            method: 'GET',
            params: {
                type: 'leaderboard'
            },
            isArray: true
        }
    });
});


Application.Services.factory('PlayerStats', function($resource, apiDomain) {
    return $resource(window.location.protocol + "//" + apiDomain.host + "\\:" + apiDomain.port + "/dice/player");
});

Application.Services.service('DiceSocket', function() {
    return io.connect(socket);
});
