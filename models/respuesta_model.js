function Respuesta(r){
	var solucion = r;
	this.corregir = function(respuestaAlumno){
		if(typeof(solucion) == "string" || typeof(solucion) == "number"){
			return solucion === respuestaAlumno;
			//pendiente de añadir la expresion regular
			//para cazar diferentes respuestas validas
		}
		if(solucion.constructor.name == "RegExp"){
			if(solucion.exec(respuestaAlumno)){ return true; }
			else{ return false; }
		}
		if(typeof(solucion) == "function"){
			return solucion(respuestaAlumno);
		}
	}
}

module.exports = Respuesta;