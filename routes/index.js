var express = require('express');
var router = express.Router();
const QuestionList = require('../models/Questions')

/* GET home page. */
router.get('/', async (req, res, next) => {
    res.render('index', {title: 'Would You?'});
});

router.get('/api/questions', async (req, res, next) => {
      try {
        const Questions = await QuestionList.find()
        res.json(Questions);
      } catch (err) {
        next (err)
      }
});

module.exports = router;