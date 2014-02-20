'use strict';

/**
 * The application file bootstraps the angular app by  initializing the main module and
 * creating namespaces and moduled for controllers, filters, services, and directives.
 */

var Application = Application || {};
Application.Services = angular.module('support.services', []);
Application.Controllers = angular.module('support.controllers', []);
Application.Filters = angular.module('support.filters', []);

angular.module('bt-support', ['ngCookies', 'restangular', 'ngRoute', 'support.services', 'support.controllers', 'support.filters'])
.config(['RestangularProvider', function(RestangularProvider) {
		RestangularProvider.setBaseUrl('http://107.170.13.108:3001/api/v1/');
	}
]);