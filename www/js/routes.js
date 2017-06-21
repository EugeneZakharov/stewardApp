angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('whoAreYou', {
    url: '/start',
    templateUrl: 'templates/whoAreYou.html',
    controller: 'whoAreYouCtrl'
  })

  .state('clientControls', {
    url: '/client',
    templateUrl: 'templates/clientControls.html',
    controller: 'clientControlsCtrl'
  })

  .state('stewardControls', {
    url: '/steward',
    templateUrl: 'templates/stewardControls.html',
    controller: 'stewardControlsCtrl'
  })

  .state('personalCode', {
    url: '/generateCode',
    templateUrl: 'templates/personalCode.html',
    controller: 'personalCodeCtrl'
  })

  .state('stewardSettings', {
    url: '/settings',
    templateUrl: 'templates/stewardSettings.html',
    controller: 'stewardSettingsCtrl'
  })

$urlRouterProvider.otherwise('/start')


});