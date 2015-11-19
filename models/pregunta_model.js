function Pregunta(p){
	var cuestion = p;
    this.getPregunta = function(){
		return cuestion;
	};
}

module.exports = Pregunta;