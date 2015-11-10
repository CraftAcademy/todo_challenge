angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ToDoCtrl', function($scope, $stateParams, ToDos, $filter) {
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
  $scope.taskDone = function(task) {
    ToDos.taskDone(task);
  };
  $scope.addTask = function() {
    $scope.tasks.push({ id: $scope.tasks.length, task: $scope.addTask.newTask, deadline: $scope.addTask.deadLine });
    };
      $scope.filterAll = $filter('uppercase')($scope.tasks);
})

.controller('ToDoDetailCtrl', function($scope, $stateParams, ToDos, $state) {
  $scope.tasks = ToDos.get($stateParams.taskId);

  $scope.editTask = function(){
      $scope.tasks.task = $scope.editTask.updateTask;
      $scope.tasks.deadline = $scope.editTask.deadLine;
      $state.go('tab.todos');
    };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
