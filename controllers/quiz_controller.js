/*exports.question = function(req,res) {
 res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

exports.answer = function(req, res) {
  if(req.query.respuesta === 'Roma'){
    res.render('quizes/answer', {respuesta: 'Correcto'});
  }
  else
    res.render('quizes/answer', {respuesta: 'Incorrecto'});
};*/
var Quiz = require('../models/quiz_model.js');
var debug = require('debug');


var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.index = function(req, res, next) {
  debug("en index.js: visitando '/'");
  res.render('index', { title: 'Quiz' });
};

exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';
  debug(req.query);
  debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.verTodas = function(req,res){
  var aux = quiz.gettodas();
  res.render('quizes/question', {pregunta: aux});
};

exports.mostrarPorId = function(req,res){
  var id = req.params.id;
  var preg = quiz.getpreg(id).pregunta;
  current = quiz.getpreg(id);
  res.render('quizes/question', {pregunta: preg});
};