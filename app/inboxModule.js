(function() {
angular.module('inboxModule', [])

.controller('InboxController', ['$scope', 'inboxFactory', function($scope, inboxFactory){
	this.messages = [];

	inboxFactory.getMessages()
		.success( angular.bind(this, function(jsonData, statusCode) {
			console.log('The request was successul!', statusCode, jsonData);
			this.messages = jsonData;
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

.factory('inboxFactory', function inboxFactory($http){
	var exports = {}

	exports.getMessages = function() {
		return $http.get('app/json/emails.json')
			.error(function(data) {
				console.log('There was en error!', data);
			});
	};

	return exports;

})

})();