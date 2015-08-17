var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz-controller');
var commentController = require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz - MPL', errors: [] });
});

router.param('quizId', quizController.load);

//router.get('/quizes/question', quizController.question);
//router.get('/quizes/answer', quizController.answer);
// Definición de rutas de /quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

// nuevo
router.get('/quizes/new', sessionController.loginRequired, quizController.new);
router.post('/quizes/create', sessionController.loginRequired,quizController.create);
// modif
router.get('/quizes/:quizId(\\d+)/edit', sessionController.loginRequired, quizController.edit);
router.put('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizController.update);
// borrado
router.delete('/quizes/:quizId(\\d+)',sessionController.loginRequired, quizController.destroy);

router.get('/author', function(req, res) {
  res.render('author', {errors: []} );
});

// Definición de rutas de comentarios
router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);

// Definición de rutas de sesion
router.get('/login', sessionController.new);
router.post('/login', sessionController.create);
router.get('/logout', sessionController.destroy);


module.exports = router;
