import angular from 'angular';
import '../style/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'angular-xeditable/dist/css/xeditable.css';
import 'angular-xeditable/dist/js/xeditable.js';

const myApp = angular.module('myApp', ["xeditable"]);

myApp.run(function(editableOptions, editableThemes) {
  editableOptions.theme = 'default';
  editableThemes['default'].submitTpl = '<button class="btn btn-success" type="submit">ok</button>';
  editableThemes['default'].cancelTpl = '<button class="btn btn-secondary" type="submit">cancel</button>';
  editableThemes['default'].formTpl = '<form editable-form" class="editable-wrap" onaftersave="edit()"></form>';
});


myApp.controller('mainController', ['$scope', '$http', '$q', function($scope, $http, $q) {

  $scope.tasks = [];
  const urlRestApi = 'http://localhost:8080/v1/api/tasks/';

    $http.get(urlRestApi).then((response) => {
      $scope.tasks = response.data;
    });

  $scope.addTask = function() {
      let postData = {};
      postData.content = $scope.task;
      postData.completed = false;

      $http.post(urlRestApi, postData).then((response) => {
        $scope.task = '';
        $scope.tasks.push(response.data);
      });
  }

  $scope.edit = function() {
    let id = this.task._id;
    let data = this.task;
    let urlRestApiPut = urlRestApi + id;
    $http.put(urlRestApiPut, data);
  }

  $scope.delete = function() {
    let id = this.task._id;
    let urlRestApiDelete = urlRestApi + id;
    $http.delete(urlRestApiDelete).then((response) => {
      $scope.tasks = $scope.tasks.filter(function(task){
        return task._id !== id;
      });
    });

  }

  $scope.done = function() {
    let id = this.task._id;
    let data = this.task;
    let urlRestApiDone = urlRestApi + id;
    this.task.completed = true;
    $http.put(urlRestApiDone, data);
  }

}]);
