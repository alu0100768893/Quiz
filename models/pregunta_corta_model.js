var Pregunta = require('./pregunta_model.js');

function PreguntaCorta(pc){
    Pregunta.call(this, pc);
    this.tipo = 'corta';
}

PreguntaCorta.prototype = new Pregunta();
PreguntaCorta.prototype.constructor = PreguntaCorta;
PreguntaCorta.prototype.getTipo = function(){
    return this.tipo;
};

module.exports = PreguntaCorta;