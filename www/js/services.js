angular.module('starter.services', [])

.factory('ToDos', function() {
  // Might use a resource here that returns a JSON array

    this.add = function (name) {
        chats.push({
            name: firstName,
        });
    };

  // Some fake testing data
  var tasks = [{
    id: 0,
    task: 'Pick up the kids at 17.00 h.',
  }, {
    id: 1,
    task: 'Do the laundry.',
  }, {
    id: 2,
    task: 'Workout',
  }

  ];

  return {
    all: function() {
      return tasks;
    },
    remove: function(chat) {
      tasks.splice(task.indexOf(tasks), 1);
    },
    get: function(taskId) {
      for (var i = 0; i < chats.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
