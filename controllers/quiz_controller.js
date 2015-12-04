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
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.verTodas = function(req,res){
  var aux = [];
  for(var i = 0; i < (quiz.npreguntas()); i++){
    aux[i] = quiz.getCuestionario(i).pregunta.getEnunciado();
  }
  res.render('quizes/todas', {pregunta: aux});
};

exports.mostrarPorId = function(req,res){
  var id = req.params.id;
  current = quiz.getCuestionario(id);
  res.render('quizes/question', {pregunta: current.pregunta});
};