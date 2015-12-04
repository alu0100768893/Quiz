var AbstractQuiz = require('./abstract_quiz_model.js');
//var debug = require('debug');
//var Pregunta = require('./pregunta_model.js');
var Respuesta = require('./respuesta_model.js');
var PreguntaCorta = require('./pregunta_corta_model.js');
var PreguntaLarga = require('./pregunta_larga_model.js');
var seleccionMultiple = require('./seleccion_multiple_model.js');
var seleccionSimple = require('./seleccion_simple_model.js');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    {
        pregunta: new seleccionMultiple('¿Cuáles de estos números son pares?', ['1','2','3','4']),
        respuesta: new Respuesta(['2','4'])
    },
    {
      pregunta: new seleccionMultiple('¿Cuáles de estos nombres son femeninos?',["Ana","Pedro","Emmeline"]),
      respuesta: new Respuesta(["Ana","Emmeline"])
    },
    {
        pregunta: new seleccionSimple('¿Cuáles de estos números es impar?', ['1','2','4']),
        respuesta: new Respuesta('1')
    },
    {
        pregunta: new PreguntaCorta('¿Quién es el capitán del Club Deportivo Tenerife?'),
        respuesta: new Respuesta(/^\s*suso\s*$/i)
    },
    {
        pregunta: new PreguntaLarga('¿Cuál es la nacionalidad del exjugador blanquiazul Fernando Carlos Redondo?'),
        respuesta: new Respuesta(/^\s*argentina\s*$/i)
    },
    {
        pregunta: new PreguntaCorta('¿Cuántas ligas hizo perder el C.D. Tenerife al Real Madrid consecutivamente?'),
        respuesta: new Respuesta(/^\s*dos\s*$/i)
    },
    {
        pregunta: new PreguntaLarga('¿Cuál es el diminutivo del C.D. Tenerife?'),
        respuesta: new Respuesta(/^\s*tete\s*$/i)
    },
    {
        pregunta: new PreguntaLarga('¿Cómo es conocido Victor Añino Bermúdez?'),
        respuesta: new Respuesta(/^\s*vitolo\s*$/i)
    },
    {
        pregunta: new PreguntaCorta('¿Cuál es el año oficial de la funcdación del C.D. Tenerife?'),
        respuesta: new Respuesta('1922')
    },
    {
        pregunta: new PreguntaLarga('¿Cuáles son las iniciales del nombre del estadio del C.D. Tenerife?'),
        respuesta: new Respuesta(/^\s*hrl\s*$/i)
    },
    {   
        pregunta: new PreguntaLarga('¿Capital de Italia?'),
        respuesta: new Respuesta(/^\s*roma\s*$/i)
    },
    {   
        pregunta: new PreguntaLarga('¿Quién reinaba en España cuando se descubrió América?'),
        respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
    },
    {
        pregunta: new PreguntaCorta('¿ 4x4 =?'),
        respuesta: new Respuesta('16')
    },
    {
        pregunta: new PreguntaCorta('¿ 5x4 =?'),
        respuesta: new Respuesta('20')
    },
    {
        pregunta: new PreguntaCorta('¿ 3x2 =?'),
        respuesta: new Respuesta('6')
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    /*{  //Código inseguro. ¡No ejecute esta pregunta salvo en un
       //entorno en el que el código del "alumno" sea fiable!
       
      pregunta: new PreguntaLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado'),
      respuesta: new Respuesta(function(x) {
        try {
          eval(x); //DANGER DANGER DANGER 
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }catch(e) {
          return false;
        }
        return false;
      })
      //pregunta: new Pregunta(),
      //respuesta: new Respuesta()
    }*/
  );
  
  /////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //ME DA ERROR AL INTRODUCIR ESTAS PREGUNTAS PORQUE SIEMPRE ME DAN INCORRECTAS
  /*var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      //debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      //debug("n2 = "+n2);
      console.log('respuesta antes de crear: ' + n1 + n2);
      self.q.push(
        { //pregunta: '¿ '+n1+'x'+n2+"= ?",
          //respuesta: function(x) {
            //debug("n1 = "+n1);
            //debug("n2 = "+n2);
            //return (x == n1*n2);
            //}
          pregunta: new PreguntaCorta("¿ "+n1+"x"+n2+"= ?"),
          //respuesta: new Respuesta(function(x) {
            // debug("n1 = "+n1);
            // debug("n2 = "+n2);
            //return (x == n1*n2);
        //})

          respuesta: new Respuesta(n1*n2)
      });
    })();
  }*/
 //debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;