'use strict'

const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.route('/')
  .get(function(req, res) {
    Task.find(function(error, result) {
      if(error) {
        res.send(error);
      }
      res.json(result);
    })
  })
  .post(function(req, res) {
    let task = new Task();
    task.label = req.body.label;
    task.content = req.body.content;
    task.completed = req.body.completed;
    task.save(function(error) {
      if(error) {
        res.send(error);
      }
      res.json(task);
    })
  });

router.route('/:task_id')
  .put(function(req, res) {
    Task.findById(req.params.task_id, function(error, result) {
      if(error) {
        res.send(error);
      }
      task.label = req.body.label;
      task.content = req.body.content;
      task.completed = req.body.completed;
      task.save(function(error) {
        if(error) {
          res.send(error);
        }
        res.json({message: 'Task updated'});
      })
    })
  })
  .delete(function(req, res) {
    Task.remove({_id: req.params.task_id}, function(error, result) {
      if(error) {
        res.send(error);
      }
      res.json({message: 'Task deleted'});
    })
  });

module.exports = router;
