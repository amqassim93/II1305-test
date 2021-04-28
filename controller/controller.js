const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Worker = require('../models/workers');


/*class controller{

    async regWorker(body){
        var worker = new Worker(body);
        var result = await worker.save();
        return result;
    }
}*/

module.exports = controller;

// const dbURI = 'mongodb+srv://dbuser1:proton1337@proton.3n7yz.mongodb.net/hcbealesdb?retryWrites=true&w=majority';

// class DAO {
//     constructor() {
//         this.db = new mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//             .then((result) => console.log('beep beep boop boop connected to db'))
//             .catch((err) => console.log(err));

//         const Worker = db.collection('Worker');
//     }
//     async testConnectivity(){
//         await this.db.authenticate();
//     }


// }