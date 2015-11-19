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
  res.render('quizes/pregunta_larga', {pregunta: current.pregunta.getPregunta()});
  else
  res.render('quizes/pregunta_corta', {pregunta: current.pregunta.getPregunta()});
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';
  //debug(req.query);
  //debug("current.respuesta(req.query.respuesta) = "+current.respuesta(req.query.respuesta));
  if (current.respuesta.corregir(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.verTodas = function(req,res){
  var aux = [];
  for(var i = 0; i < (quiz.npreguntas()-5); i++){
    aux[i] = quiz.getpreg(i).pregunta.getPregunta();
  }
  //si meto todas las asignaciones en el for, a partir de la pregunta 6
  //me da error, me dice que no puede leer getPregunta de undefined
  //no entiendo porque, he creado todas las preguntas de la misma manera
  //sin embargo en mostrarPorId no me da ningun problema con ninguna pregunta
  aux[7] = quiz.getpreg(7).pregunta.getPregunta();
  aux[8] = quiz.getpreg(8).pregunta.getPregunta();
  aux[9] = quiz.getpreg(9).pregunta.getPregunta();
  aux[10] = quiz.getpreg(10).pregunta.getPregunta();
  aux[11] = quiz.getpreg(11).pregunta.getPregunta();
  
  res.render('quizes/question', {pregunta: aux});
};

exports.mostrarPorId = function(req,res){
  var id = req.params.id;
  var preg = quiz.getpreg(id).pregunta.getPregunta();
  current = quiz.getpreg(id);
  if(current.pregunta.getTipo() == 'larga')
  res.render('quizes/pregunta_larga', {pregunta: current.pregunta.getPregunta()});
  else
  res.render('quizes/pregunta_corta', {pregunta: current.pregunta.getPregunta()});
};