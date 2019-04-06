var express = require('express')
var router = express.Router();
const passport = require('../config/passport');
const CONSTANT = require('../config/constants')



// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
router.get('/twitter', passport.authenticate("twitter",{session:false}));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/twitter/callback',
  passport.authenticate('twitter',{
    session:false, 
    failureRedirect: `${CONSTANT.FRONT_END_URL}/login`
})
,(req,res)=>{
  return res.redirect(`${CONSTANT.FRONT_END_URL}/dashboard?token=${req.user.token}`)
});

module.exports = router





