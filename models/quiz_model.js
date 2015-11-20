//var AbstractQuiz = require('models/abstract_quiz_model.js');
var AbstractQuiz = require('./abstract_quiz_model.js');
var debug = require('debug');
var Pregunta = require('./pregunta_model.js');
var Respuesta = require('./respuesta_model.js');
var PreguntaCorta = require('./pregunta_corta_model.js');
var PreguntaLarga = require('./pregunta_larga_model.js');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    /////////////////////////////////////////////////////////////////////////////////////////////
    {   /*pregunta: '¿Quién es el capitán del Club Deportivo Tenerife?',
        respuesta: function(x){
            return (/^\s*suso\s*$/i).exec(x);
            }*/
        pregunta: new PreguntaCorta('¿Quién es el capitán del Club Deportivo Tenerife?'),
        respuesta: new Respuesta('Suso')
    },
    {   /*pregunta: '¿Cuál es la nacionalidad del exjugador blanquiazul Fernando Carlos Redondo?',
        respuesta: function(x){
            return (/^\s*Argentina\s*$/i).exec(x);
        }*/
        pregunta: new PreguntaLarga('¿Cuál es la nacionalidad del exjugador blanquiazul Fernando Carlos Redondo?'),
        respuesta: new Respuesta('Argentina')
    },
    {   /*pregunta: '¿Cuántas ligas hizo perder el C.D. Tenerife al Real Madrid consecutivamente?',
        respuesta: function(x){
            return (/^\s*(dos)|(2)\s*$/i).exec(x);
        }*/
        pregunta: new PreguntaCorta('¿Cuántas ligas hizo perder el C.D. Tenerife al Real Madrid consecutivamente?'),
        respuesta: new Respuesta('Dos')
    },
    {   /*pregunta: '¿Cuál es el diminutivo del C.D. Tenerife?',
        respuesta: function(x){
            return (/^\s*Tete\s*$/i).exec(x);
        }*/
        pregunta: new PreguntaLarga('¿Cuál es el diminutivo del C.D. Tenerife?'),
        respuesta: new Respuesta('Tete')
    },
    {   /*pregunta: '¿Cómo es conocido Victor Añino Bermúdez?',
        respuesta: function(x){
            return (/^\s*Vitolo\s*$/i).exec(x);
        }*/
        pregunta: new PreguntaLarga('¿Cómo es conocido Victor Añino Bermúdez?'),
        respuesta: new Respuesta('Vitolo')
    },
    {   /*pregunta: '¿Cuál es el año oficial de la funcdación del C.D. Tenerife?',
        respuesta: function(x){
            return (/^\s*1922\s*$/i).exec(x);
        }*/
        pregunta: new PreguntaCorta('¿Cuál es el año oficial de la funcdación del C.D. Tenerife?'),
        respuesta: new Respuesta('1922')
    },
    {   /*pregunta: '¿Cuáles son las iniciales del nombre del estadio del C.D. Tenerife?',
        respuesta: function(x){
            return (/^\s*hrl\s*$/i).exec(x);
        }*/
        pregunta: new PreguntaLarga('¿Cuáles son las iniciales del nombre del estadio del C.D. Tenerife?'),
        respuesta: new Respuesta('HRL')
    },
    {   
        pregunta: new PreguntaLarga('¿Capital de Italia?'),
        respuesta: new Respuesta('Roma')
    },
    {   
        pregunta: new PreguntaLarga('¿Quién reinaba en España cuando se descubrió América?'),
        respuesta: new Respuesta('Los Reyes Católicos')
    },
    ////////////////////////////////////////////////////////////////////////////////////
    //Tengo problemas con las preguntas de las multiplicaciones
    //Al introducirlas asi, aunque la responda bien me da Incorrecto
    {
      pregunta: new PreguntaCorta('¿ 4x4 =?'),
      respuesta: new Respuesta(16)
    },
    {
      pregunta: new PreguntaCorta('¿ 5x4 =?'),
      respuesta: new Respuesta(20)
    },
    {
      pregunta: new PreguntaCorta('¿ 3x2 =?'),
      respuesta: new Respuesta(6)
    },
    /////////////////////////////////////////////////////////////////////////////////////////////
    /*{ pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
      pregunta: new Pregunta('¿Capital de Italia?'),
      respuesta: new Respuesta('Roma')
    },*/
    /*{
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
      pregunta: new Pregunta('¿Quien reinaba en España cuando se descubrió América?'),
      respuesta: new Respuesta('Reyes Católicos')
    },*/
    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      /*pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado',
      respuesta: function(x) {
        try {
          eval(x); // DANGER DANGER DANGER 
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }*/
      //pregunta: new Pregunta(),
      //respuesta: new Respuesta()
    }
  );
  
  /////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  //ME DA ERROR AL INTRODUCIR ESTAS PREGUNTAS LUEGO CON EL METODO getPreguta() en el controlador
  /*var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      debug("n2 = "+n2);
      var mult = n1*n2;
      self.q.push(
        { //pregunta: '¿ '+n1+'x'+n2+"= ?",
          //respuesta: function(x) {
            //debug("n1 = "+n1);
            //debug("n2 = "+n2);
            //return (x == n1*n2);
            //}
          pregunta: new Pregunta("¿ "+n1+"x"+n2+"= ?"),
          respuesta: new Respuesta(mult)
      });
    })();
  }*/
  debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;