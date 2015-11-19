var Pregunta = require('./pregunta_model.js');

function PreguntaLarga(pc){
    Pregunta.call(this, pc);
    this.tipo = 'larga';
}

PreguntaLarga.prototype = new Pregunta();
PreguntaLarga.prototype.constructor = PreguntaLarga;
PreguntaLarga.prototype.getTipo = function(){
    return this.tipo;
};

module.exports = PreguntaLarga;