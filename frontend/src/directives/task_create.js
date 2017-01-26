'use strict';

let controller = [
 '$scope',
 'taskService',

  function($scope, taskService) {
  $scope.setColor = function(color) {
    $scope.color = color;
  }

  $scope.addTask = function() {
    let postData = {
      content: $scope.content,
      tag: $scope.color,
      completed: false,
      important: false
    };

    taskService.addTask(postData).then((result) => {
      $scope.content = '';
      $scope.tasksObj.unshift(result);
      $scope.color = '';
    });

  }

   $scope.tags = taskService.colorTags;

}]

export default function(){
  return {
    restrict: 'E',
    templateUrl: 'src/directives/task_create.html',
    replace: true,
    controller: controller,
    scope: {
      tasksObj: "="
    }
   }
};
