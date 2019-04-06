const passport = require('passport');
const CONSTANTS = require('../config/constants')
const TwitterStrategy = require('passport-twitter').Strategy;
const passportJWT = require("passport-jwt");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = require('../schema/user.schema');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


class Passport {
    constructor() {
        this.passport = passport;
     
        // initialize all the strategy
        this.useJwtStrategy();
        this.useTwitterStrategy();

        // return passport so that other module can use it by requiring it
        return this.passport;  
    }



    useTwitterStrategy(){

        // use this startegy to login with Twitter
        this.passport.use(new TwitterStrategy({
            consumerKey: CONSTANTS.TWITTER_CONSUMER_KEY,
            consumerSecret: CONSTANTS.TWITTER_CONSUMER_SECRET,
            callbackURL: CONSTANTS.TWITTER_CALLBACK_URL
        },
        async  (token, tokenSecret, profile, done) => {
            let _id = profile._json.id;
            console.log(profile._json.profile_image_url)
            _id =  mongoose.Types.ObjectId(_id);
        // pluck the item needs to be saved

            let {
                name,
                location,
                description,
                screen_name,
                created_at,
                profile_image_url
            } = {
                ...profile._json
            };

            try{
                await User.updateOne({ _id }, { _id, name,screen_name,profile_image_url, location,description, created_at,provider:'twitter' }, {upsert: true});
                token = jwt.sign({
                    _id
                }, CONSTANTS.JWT_SECRET);
                return done(null, {token})
            }
            catch(err){
                return done(err);
            }


        }
    ));
        }

    useJwtStrategy(){
            // use this staregy to protect endpoint
            this.passport.use(new JWTStrategy({
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
                secretOrKey: CONSTANTS.JWT_SECRET
            },
            async (jwtPayload, done) => {
                console.log('wwwwww')
                console.log(jwtPayload)
                try
                {
                    let user = await User.findById(jwtPayload._id);
                    return user ? done(null, user) : done(null,false);
                }
                catch(err){
                    return done(err);
                }
}
));

        }

    
}




// return Singleton
module.exports = new Passport();