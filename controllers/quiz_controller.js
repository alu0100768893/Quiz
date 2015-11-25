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
  if(current.pregunta.getTipo() == 'larga')
  res.render('quizes/pregunta_larga', {pregunta: current.pregunta.getEnunciado()});
  else
  res.render('quizes/pregunta_corta', {pregunta: current.pregunta.getEnunciado()});
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';
  //debug(req.query);
  //debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.verTodas = function(req,res){
  var aux = [];
  /*for(var i = 0; i < (quiz.npreguntas()-5); i++){
    aux[i] = quiz.getCuestionario(i).pregunta.getEnunciado();
  }
  aux[7] = quiz.getCuestionario(7).pregunta.getEnunciado();
  aux[8] = quiz.getCuestionario(8).pregunta.getEnunciado();
  aux[9] = quiz.getCuestionario(9).pregunta.getEnunciado();
  aux[10] = quiz.getCuestionario(10).pregunta.getEnunciado();
  aux[11] = quiz.getCuestionario(11).pregunta.getEnunciado();*/
  //console.log('numero de preguntas: ' + quiz.npreguntas());
  for(var i = 0; i < (quiz.npreguntas()); i++){
    aux[i] = quiz.getCuestionario(i).pregunta.getEnunciado();
  }
  res.render('quizes/question', {pregunta: aux});
};

exports.mostrarPorId = function(req,res){
  var id = req.params.id;
  var preg = quiz.getCuestionario(id).pregunta.getEnunciado();
  current = quiz.getCuestionario(id);
  if(current.pregunta.getTipo() == 'larga')
  res.render('quizes/pregunta_larga', {pregunta: current.pregunta.getEnunciado()});
  else
  res.render('quizes/pregunta_corta', {pregunta: current.pregunta.getEnunciado()});
};