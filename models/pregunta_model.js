function Pregunta(p){
	var enunciado = p;
    this.getEnunciado = function(){
		return enunciado;
	};
}

module.exports = Pregunta;