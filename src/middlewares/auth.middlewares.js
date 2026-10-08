const isLoggedIn = (req, res, next) => {
    console.log("USER:", req.user)
  console.log("AUTHENTICATED:", req.isAuthenticated())
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
};

module.exports={
  isLoggedIn
}