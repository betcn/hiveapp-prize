(function(window, angular, undefined) {
    'use strict';
    var bcPlayer = angular.module('bcPlayer', ['ng', 'ngCookies', 'ngResource', 'base64']);

    bcPlayer.value('BCSession', {
        token: null,
        user: null,
        cookieName: null
    });

    bcPlayer.provider('BCPlayer', function() {
        var hostname = "localhost";
        var port = 8443;
        var scheme = "https";
        var base = "";
        var cookieName = 'api-token';
        var publicPaths = [];

        var constructResourceUrl = function() {
            var urlString = constructHttpUrl();
            return urlString.replace(/([a-z]):([0-9])/, "$1\\:$2");
        };

        var constructHttpUrl = function() {
            var urlString = scheme + "://" + hostname + ":" + port;
            if (base.length) {
                urlString += "/" + base.replace((/^\//), "");
            }
            return urlString;
        };

        this.serverConfig = function(conf) {
            hostname = conf.hostname || hostname;
            port = conf.port || port;
            scheme = conf.scheme || scheme;
            base = conf.base || base;
        };

        this.cookieName = function(newName) {
            cookieName = newName;
        };

        this.publicPaths = function(paths) {
            publicPaths = paths;
        };


        var BCPlayer = function($http, $resource, $base64, $cookieStore, $q, BCSession) {
            var url = constructHttpUrl();
            var resourceUrl = constructResourceUrl();

            var getUserId = function() {
                if (BCSession.user && BCSession.user._id) {
                    return BCSession.user._id;
                } else {
                    return undefined;
                }
            };
            
            return {
                url: url,
                resourceUrl: resourceUrl,
                publicPaths: publicPaths,
                login: function(alias, password) {
                    var deferred = $q.defer();
                    $http.get(url + "/auth", {
                        headers: {
                            Authorization: 'Basic ' + $base64.encode(alias + ":" + password)
                        }
                    }).success(function(user) {
                        BCSession.user = user;
                        deferred.resolve(user);
                    }).error(function(error) {
                        BCSession.user = null;
                        BCSession.token = null;
                        deferred.reject(error);
                    });
                    return deferred.promise;
                },
                auth: this.login,
                getToken: function() {
                    return $cookieStore.get(BCSession.cookieName);
                },
                User: $resource(resourceUrl + "/user/:id/:action/:currency", {
                    id: getUserId
                }, {
                    getChallenge: {
                        method: 'GET',
                        params: {
                            action: 'challenge',
                            id: getUserId
                        }
                    },
                    withdraw: {
                        method: 'GET',
                        params: {
                            action: 'withdraw',
                            curency: 'btc',
                            id: getUserId
                        }
                    },
                    addWithdrawAddress: {
                        method: 'PUT',
                        params: {
                            action: 'address/withdraw',
                            currency: 'btc',
                            id: getUserId
                        }
                    }
                }),
                isPublic: function(path) {
                    path = '/' + path.split('/')[1];
                    if (this.publicPaths.indexOf(path) >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };
        };

        this.$get = [
            '$http',
            '$resource',
            '$base64',
            '$cookieStore',
            '$q',
            'BCSession',
            BCPlayer
        ];
    });

    bcPlayer.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(function($q, $cookieStore, BCSession) {
            BCSession.token = $cookieStore.get('api-token');
            return {
                'request': function(config) {
                    if (BCSession.token && config.headers.Authorization === undefined) {
                        config.headers.Authorization = "Bearer " + BCSession.token;
                    }
                    return config || $q.when(config);
                },
                'response': function(response) {
                    var token = response.headers('api-token');
                    if (token) {
                        BCSession.token = token;
                        $cookieStore.put(BCSession.cookieName, token);
                    }
                    return response || $q.when(response);
                }
            };
        });
    }]);
})(window, window.angular);
