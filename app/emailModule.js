(function() {
angular.module('emailModule', [])

.directive('email', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: 'app/js/directives/email.tmpl.html',
		link: function($scope, iElm, iAttrs, controller) {			
		}
	};
});

})();