(function(window, angular) {
    "use strict";
    var bcInfoLinks = angular.module('bcInfoLinks', ['ng']);
    bcInfoLinks.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/what-is-bitcoin', {
            templateUrl: 'tpl/whatisbitcoin.html'
        }).when('/where-to-get-bitcoin', {
            templateUrl: 'tpl/wheretogetbitcoin.html'
        });
    }]);
})(window, window.angular);
