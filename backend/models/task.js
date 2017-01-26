const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  content: String,
  important: Boolean,
  completed: Boolean,
  tag: ''
});

module.exports = mongoose.model('Task', TaskSchema);
