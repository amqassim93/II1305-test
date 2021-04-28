const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    
    username: {
        type: String,
        required: true
      },

      password: {
        type: String,
        required: true
      }

},{timestamps: true});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;



