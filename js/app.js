'use strict';

/* global angular */
var Application = Application || {};
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);


var appDeps = [
    'ngRoute',
    'ngResource',
    'application.filters',
    'application.services',
    'application.directives',
    'application.controllers',
    'localization'
];

var run = function($rootScope, $route, $location, CurrentGameData, BTCExchangeRate) {
    // Bind the `$routeChangeSuccess` event on the rootScope, so that we dont need to bind in individual controllers.
    CurrentGameData.updateCurrent();
    BTCExchangeRate.update();
    $rootScope.$on('$routeChangeSuccess', function(currentRoute, previousRoute) {
        // save these to the root scope just for others to use
        $rootScope.currentRoute = currentRoute;
        $rootScope.previousRoute = previousRoute;
        CurrentGameData.updateCurrent();
        BTCExchangeRate.update();
        // This will set the custom property that we have defined while configuring the routes.
        if ($route.current.action && $route.current.action.length > 0) {
            $rootScope.action = $route.current.action;
        }
    });
};

var config = function($routeProvider, $locationProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|bitcoin):/);
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.when('/', {
        templateUrl: 'tpl/home.html',
        controller: "HomeController"
    }).when('/index.html', {
        templateUrl: 'tpl/home.html',
        controller: "HomeController"
    }).when('/buy-tickets', {
        templateUrl: 'tpl/home.html',
        controller: "HomeController"
    }).when("/game/:game", {
        templateUrl: 'tpl/game.html',
        controller: 'GameDataController'
    }).when("/game-detail/:gameId", {
        templateUrl: 'tpl/game-detail.html',
        controller: 'GameDetailController'
    }).when("/history", {
        templateUrl: 'tpl/history.html',
        controller: 'HistoryController'
    }).when("/proof", {
        templateUrl: 'tpl/proof.html'
    }).when("/search", {
        templateUrl: 'tpl/search.html',
        controller: 'SearchController'
    }).otherwise({
        templateUrl: 'tpl/error404.html'
    });

};

angular.module('application', appDeps)
.config(['$routeProvider', '$locationProvider', '$compileProvider', config])
.run(['$rootScope', '$route', '$location', 'CurrentGameData', 'BTCExchangeRate', run]);
