var Pregunta = require('./pregunta_model.js');

function PreguntaCorta(pc){
    Pregunta.call(this, pc);
    this.vista = '<input type="text" name="respuesta" placeholder="Responda aquí"><br>';
}

PreguntaCorta.prototype = new Pregunta();
PreguntaCorta.prototype.constructor = PreguntaCorta;

module.exports = PreguntaCorta;