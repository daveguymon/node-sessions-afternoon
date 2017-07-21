//STEP 1
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const checkForSession = require('./middlewares/checkForSession');
const swagCtrl = require('./controllers/swag_controllers');
const authCtrl = require('./controllers/auth_controller');
const cartCtrl = require('./controllers/cart_controller');
const searchCtrl = require('./controllers/search_controller');

const port = 3000;

//STEP 2
const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: 'topsecretstring',
  resave: false,
  saveUninitialized: false
}))

//STEP 4
app.use(checkForSession);

//STEP 12
app.use(express.static(__dirname+'/../public/build'))

//STEP 5
app.get('/api/swag', swagCtrl.read);

//STEP 7
app.post('/api/login', authCtrl.login);
app.post('/api/register', authCtrl.register);
app.post('/api/signout', authCtrl.signout);
app.get('/api/user', authCtrl.getUser);

//STEP 9
app.post('/api/cart', cartCtrl.add);
app.post('/api/cart/checkout', cartCtrl.checkout);
app.delete('/api/cart', cartCtrl.delete);

//STEP 11
app.get('/api/search', searchCtrl.search);

app.listen(port, ()=>console.log(`Writing code at port ${port}.`))
