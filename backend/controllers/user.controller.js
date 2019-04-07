const twitter = require('../config/twitter');

module.exports.getUser =  (req,res)=>{
    // simply return req.user because req.user will already have been populated by jwt authentication middleware
    return res.json(req.user);
}


module.exports.getMyFollower = async(req,res)=>{
    try{
       let result =  await twitter.get('https://api.twitter.com/1.1/followers/list.json',{count:50,screen_name:req.user.screen_name});
       return res.json(result)
    }
    catch(err){
        res.status(400).send(err);
    }
    
}