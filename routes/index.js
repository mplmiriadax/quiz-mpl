var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz-controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz - MPL' });
});

router.param('quizId', quizController.load);

//router.get('/quizes/question', quizController.question);
//router.get('/quizes/answer', quizController.answer);
// Definición de rutas de /quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', function(req, res) {
  res.render('author' );
});

module.exports = router;
