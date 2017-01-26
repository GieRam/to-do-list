'use strict';

let controller = [
 '$scope',
 'taskService',

  function($scope, taskService) {

   $scope.tags = taskService.colorTags;

}]

export default function(){
  return {
    restrict: 'E',
    templateUrl: 'src/directives/task_color_tag.html',
    replace: true,
    controller: controller,
    scope: {
      tasksObj: "="
    }
   }
};
