'use strict';

let controller = [
 '$scope',
 'taskService',

  function($scope, taskService) {
    $scope.doneList = {};
    $scope.delete = function() {
      let taskId = this.task._id;
      taskService.deleteTask(taskId)
      .then((response) => {
        $scope.tasksObj = $scope.tasksObj.filter(function(task){
          return task._id !== taskId;
        });
      });
    }
}]

export default function(){
  return {
    restrict: 'E',
    templateUrl: 'src/directives/task_done_listed.html',
    replace: true,
    controller: controller,
    scope: {
      tasksObj: '='
    }
   }
};
