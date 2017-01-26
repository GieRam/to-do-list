import angular from 'angular';
import '../style/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import taskController from './controller';
import taskService from './service';
import taskCreate from './directives/task_create.js';
import taskListed from './directives/task_listed.js';
import taskDoneListed from './directives/task_done_listed.js';
import taskColorTag from './directives/task_color_tag.js';

'use strict';
angular.module('myApp', [])
.controller('taskController', taskController)
.service('taskService', taskService)
.directive('taskCreate', taskCreate)
.directive('taskListed', taskListed)
.directive('taskDoneListed', taskDoneListed)
.directive('taskColorTag', taskColorTag)
.name;
