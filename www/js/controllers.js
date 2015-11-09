angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ToDoCtrl', function($scope, $stateParams, ToDos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.tasks = ToDos.all();
  $scope.remove = function(task) {
    ToDos.remove(task);
  };
  $scope.addTask = function() {
    $scope.tasks.push({ task: $scope.addTask.newTask, deadline: $scope.addTask.deadLine });
    };
})

.controller('ToDoDetailCtrl', function($scope, $stateParams, ToDos) {
  $scope.tasks = ToDos.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
