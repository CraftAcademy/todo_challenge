angular.module('starter.services', [])

.factory('ToDos', function() {
  // Might use a resource here that returns a JSON array


  // Some fake testing data
  var tasks = [{
    id: 0,
    task: 'Pick up the kids at 17.00 h.',
    deadline: '2015-10-23',
    taskstatus: 'Done'
  }, {
    id: 1,
    task: 'Do the laundry.',
    deadline: '2015-12-05',
    taskstatus: 'Pending'
  }, {
    id: 2,
    task: 'Workout',
    deadline: '2015-11-24',
    taskstatus: 'Done'
  }

  ];

  return {
    id: function() {
      return tasks.length+1;
    },
    all: function() {
      return tasks;
    },
    remove: function(task) {
      tasks.splice(task.indexOf(tasks), 1);
    },
        taskDone: function(task) {
      task.taskstatus = 'Done';
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
