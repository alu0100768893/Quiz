//var AbstractQuiz = require('models/abstract_quiz_model.js');
var AbstractQuiz = require('./abstract_quiz_model.js');
var debug = require('debug');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    /////////////////////////////////////////////////////////////////////////////////////////////
    {   pregunta: '¿Quién es el capitán del Club Deportivo Tenerife?',
        respuesta: function(x){
            return (/^\s*suso\s*$/i).exec(x);
        }
    },
    {   pregunta: '¿Cuál es la nacionalidad del exjugador blanquiazul Fernando Carlos Redondo?',
        respuesta: function(x){
            return (/^\s*Argentina\s*$/i).exec(x);
        }
    },
    {   pregunta: '¿Cuántas ligas hizo perder el C.D. Tenerife al Real Madrid consecutivamente?',
        respuesta: function(x){
            return (/^\s*(dos)|(2)\s*$/i).exec(x);
        }
    },
    {   pregunta: '¿Cuál es el diminutivo del C.D. Tenerife?',
        respuesta: function(x){
            return (/^\s*Tete\s*$/i).exec(x);
        }
    },
    {   pregunta: '¿Cómo es conocido Victor Añino Bermúdez?',
        respuesta: function(x){
            return (/^\s*Vitolo\s*$/i).exec(x);
        }
    },
    {   pregunta: '¿Cuál es el año oficial de la funcdación del C.D. Tenerife?',
        respuesta: function(x){
            return (/^\s*1922\s*$/i).exec(x);
        }
    },
    {   pregunta: '¿Cuáles son las iniciales del nombre del estadio del C.D. Tenerife?',
        respuesta: function(x){
            return (/^\s*hrl\s*$/i).exec(x);
        }
    },
    /////////////////////////////////////////////////////////////////////////////////////////////
    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },
    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
    },
    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado',
      respuesta: function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }
    }
  );
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      debug("n2 = "+n2);
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+"= ?",
          respuesta: function(x) {
            debug("n1 = "+n1);
            debug("n2 = "+n2);
            return (x == n1*n2);
        }
      })
    })();
  }
  debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;