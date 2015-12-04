var Pregunta = require('./pregunta_model.js');
var EJS = require('ejs');

function seleccionSimple(pss, resp){
    Pregunta.call(this, pss);
    this.respuestas = resp;
    this.vista;
//    this.vista = function(){
//		return 'Pregunta: ' + pss + '<br><select name="respuesta[]" multiple><option value="' + resp[0] + '">' + resp[0] + '</option><option value="' + resp[1] + '">' + resp[1] + '</option><option value="' + resp[2] + '">' + resp[2] + '</option><option value="' + resp[3] + '">' + resp[3] + '</option></select><br>' +
//						'<input type="submit" value="Enviar">' +
//						'<p>Presione Ctrl (windows) / Command (Mac) para seleccionar varias opciones.</p>';
//	};
	var self = this;

    EJS.renderFile('views/quizes/seleccion_simple.ejs',{resp: this.respuestas},
    function(err,vista){
    if(err) throw err;
    else self.vista = vista;
  });
}

seleccionSimple.prototype = new Pregunta();
seleccionSimple.prototype.constructor = seleccionSimple;

module.exports = seleccionSimple;