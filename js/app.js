var app = angular.module('ToDo', ["xeditable"]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});

app.controller('toDoController', ['$scope',
    function($scope) {
        $scope.todos = [{
            'title': "My first to-do! Click to edit or tick the checkbox to mark as completed!",
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