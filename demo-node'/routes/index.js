var express = require('EXPRESS');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANJAC',msg:'hello' });
});

module.exports = router;
