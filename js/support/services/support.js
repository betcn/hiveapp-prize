'use strict';

Application.Services.factory("SupportFactory", function (Restangular, AuthService, $location) {
	var SupportFactory = {},
		baseSupport = Restangular.all('ticket');
	SupportFactory.tickets = {};
	// create a ticket 
	SupportFactory.create = function (data, callback){
		baseSupport.customPOST(data).then(function(response){
			return callback(response);
		});
	};

	// get all the tickets with all status
	SupportFactory.reads = function (status, callback){
		if(!AuthService.authenticate){
			return;
		}

		baseSupport.customGET('status/' + status).then(function(response){
			if(response.result){
				SupportFactory.tickets.open = response.length;
				return callback(response);
			} else {
				return callback(false);
			}
		});
	};

	// get ticket details by id
	SupportFactory.read = function (id, callback) {
		if(!AuthService.authenticate){
			return;
		}
		baseSupport.get(id).then(function(response){
			if(response.result){
				return callback(response.data);
			} else {
				return callback(false);
			}
		});
	};

	// get ticket details by id
	SupportFactory.view = function (id, callback) {
		baseSupport.customGET('view/'+id).then(function(response){
			if(response.result){
				return callback(response.data);
			} else {
				return callback(false);
			}
		});
	};

	// update ticket, set by status
	SupportFactory.update = function (id, status, callback){
		if(!AuthService.authenticate){
			return;
		}
		baseSupport.one(id).customPUT(status).then(function(response){
			if(response.success){
				return callback(true);
			} else {
				return callback(false);
			}
		});
	};

	// update ticket, set by status
	SupportFactory.updateWithComment = function (id, comment, status, isAdmin, callback){
		baseSupport.one('comment/'+id).customPUT({comment: comment, status: status, isAdmin: isAdmin}).then(function(response){
			if(response.result){
				return callback(response.data);
			}
		});
	};

	SupportFactory.login = function(username, password, callback){
		baseSupport.customPOST({username: username, password: password}, "login").then(function(response){
			if(response.result){
				AuthService.authenticate = true;
			} else {
				AuthService.authenticate = false;
			}
			return callback(AuthService.authenticate);
		});
	};

	SupportFactory.logout = function(callback){
		baseSupport.customGET('/login').then(function(response){
			if(response.result){
				AuthService.authenticate = false;
			}
			return callback(AuthService.authenticate);
		});
	};


	SupportFactory.checkAuth = function(){
		if(!AuthService.authenticate){
			$location.path('/new-tickets');
		}
	};

	SupportFactory.viewTicket = function (id){
		$location.path('/detail/' + id);
	};

	return SupportFactory;
});

Application.Services.value('AuthService', {authenticate: false, allowedPaths:['submit','view']});