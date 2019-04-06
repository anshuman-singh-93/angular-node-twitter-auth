//Import the mongoose module
var mongoose = require('mongoose');
const CONSTANTS = require('./constants');


class Mongoose {

    constructor (){
        this.url = `mongodb://${CONSTANTS.MONGO_USERNAME}:${CONSTANTS.MONGO_PASSWORD}@${CONSTANTS.MONGO_HOSTNAME}:${CONSTANTS.MONGO_PORT}/${CONSTANTS.MONGO_DATABASE}`;
        this.db = mongoose.connection;


    //Bind connection to error event (to get notification of connection errors)
    this.db.on('error', (err)=>{
        console.error(err);
        // let it exit, process manager will restart
        process.exit(1);
    });
    this.db.on('connected', console.error.bind(console, 'MongoDB connected:'));

    }

    async connect(){
       return await mongoose.connect(this.url, { useNewUrlParser: true });
    }
}



module.exports = new Mongoose();

