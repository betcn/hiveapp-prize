(function(window, angular) {
    'use strict';
    var bcAdmin = angular.module('bcAdmin', ['ng', 'ngCookies', 'base64']);

    bcAdmin.provider('BCAuth', function() {
        var hostname = "localhost";
        var port = 8443;
        var scheme = "https";
        var base = "";
        var cookieName = 'api-token';
        var publicPaths = [];

        var constructUrl = function() {
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

        this.$get = [
            '$http',
            '$base64',
            '$cookieStore',
            'BCSession',
            function($http, $base64, $cookieStore, BCSession) {
                BCSession.cookieName = cookieName;
                BCSession.token = $cookieStore.get(BCSession.cookieName);
                return {
                    publicPaths: publicPaths,
                    url: constructUrl(),
                    login: function(username, password) {
                        return $http.get(this.url + '/auth', {
                            headers: {
                                Authorization: 'Basic ' + $base64.encode(username + ":" + password)
                            }
                        });
                    },
                    logout: function() {
                        $http.get(this.url + '/logout').success(function() {
                            $cookieStore.remove(BCSession.cookieName);
                        });
                    },
                    isPublic: function(path) {
                        path = '/' + path.split('/')[1];
                        if (this.publicPaths.indexOf(path) >= 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                };
            }];
    });

    bcAdmin.value('BCSession', {
        token: null,
        user: null,
        cookieName: null
    });

    bcAdmin.config(['$httpProvider', function($httpProvider) {
        var interceptor = function($q, $cookieStore, $location, BCSession) {
            BCSession.token = $cookieStore.get(BCSession.cookieName);
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
                },
                'responseError': function(rejection) {
                    if (rejection.status === 403) {
                        BCSession.token = null;
                        $cookieStore.remove(BCSession.cookieName);
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        };
        $httpProvider.interceptors.push(['$q', '$cookieStore', '$location', 'BCSession', interceptor]);
    }]);
    
    return bcAdmin;
})(window, window.angular);
