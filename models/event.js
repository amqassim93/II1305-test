const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    
    idNumber: {
        type: Number,
        required: true,
        unique: true
      },
    
    worker: {
      type: String,
      required: true
    },
    
    job: {
        type: String,
        required: true
      },

    startTime: {
        type: String,
        required: true
      },

    endTime: {
        type: String,
        required: true
      },

      date: {
        type: Date,
        required: true
      },

    vehicle: {
        type: String,
      },

    equipment1: {
        type: String,
      },

    equipment2: {
        type: String,
      },

    hectares: {
        type: String,
      },

    items: {
        type: String,
      }

},{timestamps: true});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;