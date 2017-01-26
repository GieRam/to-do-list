'use strict';

let taskService = [
'$http',

function($http) {
  const urlApi = 'http://localhost:8080/v1/api/tasks/';

  return {

    getTasksList: function() {
      let promise = $http.get(urlApi).then((response) => {
        return response.data.reverse();
      });
      return promise;
    },
    addTask: function(postData) {
      let promise = $http.post(urlApi, postData).then((response) => {
        return response.data;
      });
      return promise;
    },
    editTask: function(task) {
      let id = task._id;
      let promise = $http.put((urlApi + id), task).then((response) => {
        return response.data;
      });
      return promise;
    },
    deleteTask: function(id) {
      let promise = $http.delete(urlApi + id).then((response) => {
        return response.data;
      });
      return promise;
    },
    colorTags: ['#F1B136', '#DE576C', '#a66037', '#7C56E4', '#A7C3CB']

  }

}];

export default taskService;
