//STEP 5
const swag = require('./../models/swag');

module.exports = {
  read: function (req, res, next) {
    console.log('swagCtrl.read executed');
    res.status(200).json(swag);
  },


}
