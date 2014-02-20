'use strict';
 //open = 1, closed = 2, pending = 3,  flagged = 4
Application.Controllers.controller('NewTicketController', ['$scope', 'SupportFactory', '$location', function($scope, SupportFactory, $location) {
	$scope.ticket = {};
	$scope.createTicket = function() {
		SupportFactory.create($scope.ticket, function(response){
			if(response.result){
				$location.path('/support/submit/'+response.id);
			}
		});
	};
}]);

Application.Controllers.controller('ViewTicketController', ['$scope', 'SupportFactory', '$routeParams', function($scope, SupportFactory, $routeParams) {
	var id = $routeParams.id;
	$scope.comment = {};

	SupportFactory.view(id, function(result){
		$scope.ticket = result;
		$scope.comments = result.comments;
	});

	$scope.replyToTicketByuser = function (id){
		SupportFactory.updateWithComment(id, $scope.comment.message, 0, false, function(result){
			$scope.comments.push(result);
			$scope.comment.message = "";
		});
	};
}]);

Application.Controllers.controller('SubmittedTicketController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
	$scope.ticketId = $routeParams.id;
	$scope.host = $location.absUrl().replace('submit', 'view');
}]);