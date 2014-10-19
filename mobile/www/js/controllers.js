angular.module('roarz.controllers',[])

.controller('HomeController', ['$scope', 'USER', '$state',
  function($scope, USER, $state) {
    $scope.user = {};
    $scope.next = function() {
        USER.name = $scope.user.name;
        $state.go('chat');
    }
}])

.controller('ChatController',['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.$on('event:file:selected',function(event, data) {
        //console.log(data.image)
    });
}]);
