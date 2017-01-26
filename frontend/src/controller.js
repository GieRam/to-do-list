'use strict';

let taskController = ['$scope', '$timeout', 'taskService', function($scope, $timeout, taskService) {

  taskService.getTasksList().then((result)=> {
    $scope.tasks = result;
    console.log(result);
  });

}];

export default taskController;
