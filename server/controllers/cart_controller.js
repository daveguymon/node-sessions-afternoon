//STEP 8
const swag = require('./../models/swag');

module.exports = {
  add: function(req, res, next) {
    console.log('add executed')
    const id = req.query.id;
    const cart = req.session.user.cart;

    const index = cart.findIndex((swag) => swag.id == id);

    if(index === -1) {
      const selectedSwag = swag.find((swag) => swag.id == id);
      cart.push(selectedSwag);
      req.session.user.total += selectedSwag.price;
    }
    res.status(200).json(req.session.user);
  },

  delete: function(req, res, next) {
    console.log('delete executed');
    const id = req.query.id;
    const cart = req.session.user.cart;
    const selectedSwag = swag.find((swag) => swag.id == id);

    if(selectedSwag) {
      const i = cart.findIndex((swag) => swag.id == id);
      cart.splice(i, 1);
      req.session.user.total -= selectedSwag.price;
    }
    res.status(200).json( req.session.user );
  },

  checkout: function(req, res, next) {
    const { user } = req.session;

    user.cart = [];
    user.total = 0;

    res.status(200).json(req.session.user);
  }
}
