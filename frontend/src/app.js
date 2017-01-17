import angular from 'angular';
import '../style/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$http', '$q', function($scope, $http, $q) {

  $scope.tasks = [];

  new $q((resolve) => {
    const url = 'http://localhost:8080/v1/api/tasks';

    $http.get(url).then((response) => {
      $scope.tasks = response.data;
      // resolve();
    });

  });


  $scope.addTask = function() {

    new $q((resolve) => {
      const url = 'http://localhost:8080/v1/api/tasks';
      let postData = {};
      postData.content = $scope.task;

      $http.post(url, postData).then((response) => {
        // resolve(response.data);
        $scope.task = '';
        $scope.tasks.push(response.data);
      });

    });

  }

}]);
