const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  content: String,
  label: String,
  completed: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);
