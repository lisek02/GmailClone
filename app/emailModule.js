(function() {
angular.module('emailModule', [])

.controller('EmailController', ['$scope', '$stateParams', 'emailFactory', function($scope, $stateParams, emailFactory) {
	this.email = [];

	emailFactory.getEmail($stateParams)
		.success( angular.bind(this, function(jsonData, statusCode) {
			console.log('The request was successcul', statusCode, jsonData);
			this.email = jsonData;
		}) );

	console.log('Email details:', this.email);
}])

.directive('email', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: 'app/js/directives/email.tmpl.html',
		link: function($scope, iElm, iAttrs, controller) {			
		}
	};
})

.factory('emailFactory', function emailFactory($http, $stateParams) {
	var exports = {};

	exports.getEmail = function(params) {
		if(params.id) {
			return $http.get('app/json/message/' + params.id + '.json')
				.error(function(data) {
					console.log('There was an error!', data);
				});
		};
	};

	return exports;		

})

})();