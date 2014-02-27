'use strict';

Application.Directives.directive('bcNavigation', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'tpl/navigation/navigation.html'
        };
    }
]);

Application.Directives.directive('bcFooter', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'tpl/navigation/footer.html'
        };
    }
]);

Application.Directives.directive('bcLoader', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'tpl/preloader.html'
        };
    }
]);

