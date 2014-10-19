// Ionic Starter App

angular.module('roarz', [
  'ionic',
  'roarz.controllers',
  'roarz.services',
  'roarz.directives'
])

.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $state.go('home');
  });
})

.config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('home',{
            url:'/home',
            controller:'HomeController',
            templateUrl:'views/home.html'
        }).state('chat',{
            url:'/chat',
            controller:'ChatController',
            templateUrl:'views/chat.html'
        });
}]);
