//STEP 6
const users = require('./../models/users');
let id = 1;

module.exports = {
  login: function(req, res, next) {
    const session = req.session;
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => u.username === username && u.password === password);

    if(user) {
      session.user.username = user.username;
      res.status(200).json(session.user);
    } else {
      res.status(500).json('UNAUTHORIZED');
    }

  },

  register: function(req, res, next) {
    const session = req.session;
    const username = req.body.username;
    const password = req.body.password;

    users.push({
      id: id,
      username: username,
      password: password
    })
    id++;

    session.user.username = username;
    res.status(200).json(session.user);
  },

  signout: function(req, res, next) {
    const session = req.session;
    session.destroy();
    res.status(200).json(req.session);
  },

  getUser: function(req, res, next) {
    const session = req.session;
    res.status(200).json(session.user);
  }
}
