function Respuesta(solucion){
	this.solucion = solucion;
	console.log('respuesta: ' + this.solucion + solucion);
	if(typeof(this.solucion) == "string" || typeof(this.solucion) == "number"){
			return function(x){return x === solucion;};
		}
		else if(this.solucion.constructor.name == "RegExp"){
			return function(x) {return x.match(this.solucion);};
		}
		else if(typeof(this.solucion) == "function"){
			return function(x){this.solucion(solucion);};
		}
	/*this.corregir = function(respuestaAlumno){
		if(typeof(solucion) == "string" || typeof(solucion) == "number"){
			return solucion === respuestaAlumno;
		}
		else if(solucion.constructor.name == "RegExp"){
			if(solucion.exec(respuestaAlumno)){ return true; }
			else{ return false; }
		}
		else if(typeof(solucion) == "function"){
			return solucion(respuestaAlumno);
		}
	};*/
}

module.exports = Respuesta;