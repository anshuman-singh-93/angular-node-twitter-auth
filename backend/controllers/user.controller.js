module.exports.getUser =  (req,res)=>{
    // simply return req.user because req.user will already have been populated by jwt authentication middleware
    return res.json(req.user);
}