
// using dotenv to popuate process.env from .env file
require('dotenv').config()


const {promisify} = require('util')
const express = require('express');
const session = require('express-session');
const mongoose = require('./config/mongoose');
const cors = require('cors');
const passport = require('passport');
const CONSTANTS = require('./config/constants')
const app =  express();
app.listen = promisify(app.listen);

const validateEnv = () => {

    
    let unsetEnv =  Object.keys(CONSTANTS).filter((env) => typeof process.env[env] === 'undefined');
  
    if (unsetEnv.length > 0) {
      throw new Error(`Required ENV variables are not set: [${unsetEnv.join(',')}]`);
    }
  }
  

// initialize all the middleware
const initializeMiddlware = ()=>{
    app.use(cors());
    app.use(session({
        secret: CONSTANTS.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
      }))

      // initialize passport strategy
      require('./config/passport-strategy')
    
// required for passport
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


console.info(`All Middleware has been registered`)

}


// initiaize all routes
const initializeRoute = ()=>{
    app.use('/auth',require('./routes/auth.route'));
    app.use('/user',passport.authenticate('jwt',{session:false}),require('./routes/user.route'));
    console.info(`All route has been initialized`);
}


// start Http server
const startServer = async ()=>{
    await app.listen(CONSTANTS.PORT);
    console.info(`Server is running on Port ${CONSTANTS.PORT}`)
}


// connect to mongodb server

const startDB = async ()=>{
    await mongoose.connect();
    console.log('Database connected')
}


const run = async ()=>{
    validateEnv();
    initializeMiddlware();
    initializeRoute();
    await startDB();
    await startServer();

}


// Entry point 
run().then(()=>{
    console.log(`[x] All Good!`);
}).catch((err)=>{
    throw err;
})

