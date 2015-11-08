angular.module('ToDo', []).
controller('toDoController', ['$scope',

    function($scope) {

        $scope.todos = [{
            'title': "My first to-do!",
            'completed': false
        }];

        $scope.addToDo = function() {
            $scope.todos.push({
                'title': $scope.newToDo,
                'completed': false
            });
            $scope.newToDo = '';
        };

        $scope.clearCompleted = function() {
            $scope.todos = $scope.todos.filter(function(todo) {
                return !todo.completed;
            });
        };
    }
]);