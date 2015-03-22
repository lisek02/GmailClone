(function() {
angular.module('inboxModule', ['ngSanitize'])

.controller('InboxController', ['$scope', 'inboxFactory', function($scope, inboxFactory){
	this.messages = [];

	this.deleteMessage = function(index) {
		inboxFactory.deleteMessage(index);
	};

	inboxFactory.getMessages()
		.then( angular.bind(this, function then() {
			console.log('The request was successul!');
			this.messages = inboxFactory.messages;
		}) );

	console.log('Messages:', this.messages);
}])

.directive('inbox', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: 'app/js/directives/inbox.tmpl.html',
		link: function($scope, iElm, iAttrs, controller) {
		}
	};
})

.factory('inboxFactory', function inboxFactory($q, $http){
	'use strict';
	var exports = {};

	exports.messages = [];

	exports.getMessages = function() {
		var deferred = $q.defer();
		return $http.get('app/json/emails.json')
			.success(function(data) {
				exports.messages = data;
				deferred.resolve(data);
			})
			.error(function(data) {
				console.log('There was en error!', data);
				deferred.reject(data);
			});
			return deferred.promise;
	};

	
	exports.deleteMessage = function(index) {
		this.messages.splice(index, 1);
	};

	return exports;

})

})();