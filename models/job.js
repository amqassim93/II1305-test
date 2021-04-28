const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    
    idNumber: {
        type: Number,
        required: true,
        unique: true
    },
    
    name: {
      type: String,
      required: true
    },
    
    description: {
        type: String,
      },

      location: {
        type: String,
      },

      address: {
        type: String,
      },

      Workers: {
        type: String,
      },

      isCompleted: {
        type: Boolean,
      },
      

},{timestamps: true});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;



