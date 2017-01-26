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
    task.important = req.body.important;
    task.content = req.body.content;
    task.completed = req.body.completed;
    task.tag = req.body.tag;
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
      result.important = req.body.important;
      result.content = req.body.content;
      result.completed = req.body.completed;
      result.tag = req.body.tag;
      result.save(function(error) {
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
