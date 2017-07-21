//STEP 11
const swag = require('./../models/swag');

module.exports = {
  search: function(req, res, next) {
    console.log("search executed")
    const { category } = req.query;
    if(!category) {
      res.status(200).json(swag);
    } else {
      const filtered = swag.filter((s) => s.category === category);
      res.status(200).json(filtered);
    }
  }
}
