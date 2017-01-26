'use strict';

let controller = [
 '$scope',
 '$timeout',
 'taskService',

  function($scope, $timeout, taskService) {

  $scope.editFieldOpen = function() {
    this.task.editing = true;
  }

  $scope.edit = function() {
    taskService.editTask(this.task).then((result) => {
      this.task.editing = false;
    });
  }

  $scope.delete = function() {
    let taskId = this.task._id;
    taskService.deleteTask(taskId)
    .then((response) => {
      $scope.tasksObj = $scope.tasksObj.filter(function(task){
        return task._id !== taskId;
      });
    });
  }

  $scope.done = function() {
    let taskData = this.task;
    taskData.checked = true;
    $timeout(function () {
      taskData.completed = true;
      taskService.editTask(taskData);
    }, 300);
  }

  $scope.changeImportance = function() {
    let taskData = this.task;
    (taskData.important === true) ? taskData.important = false : taskData.important = true;
    taskService.editTask(taskData);
  }

  $scope.tags = taskService.colorTags;
}]

export default function(){
  return {
    restrict: 'E',
    templateUrl: 'src/directives/task_listed.html',
    replace: true,
    controller: controller,
    scope: {
      tasksObj: '='
    }
   }
};
