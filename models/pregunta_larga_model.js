var Pregunta = require('./pregunta_model.js');

function PreguntaLarga(pl){
    Pregunta.call(this, pl);
    this.vista = '<textarea cols="40" rows="10" name="respuesta" placeholder="Responda aquí"></textarea><br>';
}

PreguntaLarga.prototype = new Pregunta();
PreguntaLarga.prototype.constructor = PreguntaLarga;

module.exports = PreguntaLarga;