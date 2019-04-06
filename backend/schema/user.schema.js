var mongoose = require('mongoose');

const  UserSchema = new mongoose.Schema({
    user_id: String,
    provider:String,
    name:String,
    location:String,
    description:String,
    screen_name:String,
    profile_image_url:String,
    created_at:Date
  });

module.exports = mongoose.model('User', UserSchema);
