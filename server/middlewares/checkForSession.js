//STEP 3
module.exports = function(req, res, next) {
  const session = req.session;

  if(!session.user) {
    session.user = {
      username: '',
      cart: [],
      total: 0
    }
  }
  next();
};
