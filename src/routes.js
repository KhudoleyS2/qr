const router = require('express').Router();
const controllers = require('./controllers');

router.get('/', (req, res) => {
  res.send(__dirname+'/public/index.html');
});

router.get('/token', controllers.generateQR)

module.exports = router;