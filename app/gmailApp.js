(function(){

angular.module('gmailApp', ['inboxModule', 'ui.router'])
.config(['$urlRouterProvider','$stateProvider',
	function($urlRouterProvider, $stateProvider) {

		$stateProvider
			.state('inbox', {
				url: '/inbox',
				templateUrl: './app/views/inbox.html'
			})

			.state('email', {
				url: '/email',
				templateUrl: './app/views/email.html'
			})

			$urlRouterProvider.when('', '/inbox');
	
	}])

})();