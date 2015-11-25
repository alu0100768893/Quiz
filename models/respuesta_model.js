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
}

module.exports = Respuesta;