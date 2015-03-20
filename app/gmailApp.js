(function(){

angular.module('gmailApp', ['inboxModule', 'emailModule', 'ui.router'])
.config(['$urlRouterProvider','$stateProvider',
	function($urlRouterProvider, $stateProvider) {

		$stateProvider
			.state('inbox', {
				url: '/inbox',
				templateUrl: './app/views/inbox.html'
			})

			.state('email', {
				url: '/inbox/email/:id',
				templateUrl: './app/views/email.html'
			})

			$urlRouterProvider.when('', '/inbox');
	
	}])

})();