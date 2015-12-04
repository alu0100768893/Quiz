var Pregunta = require('./pregunta_model.js');
var EJS = require('ejs');

function seleccionMultiple(psm, resp){
    Pregunta.call(this, psm);
    this.respuestas = resp;
    this.vista;
//    this.vista = function(){
//		return 'Pregunta: ' + psm + '<br><select name="respuesta[]" multiple><option value="' + resp[0] + '">' + resp[0] + '</option><option value="' + resp[1] + '">' + resp[1] + '</option><option value="' + resp[2] + '">' + resp[2] + '</option><option value="' + resp[3] + '">' + resp[3] + '</option></select><br>' +
//						'<input type="submit" value="Enviar">' +
//						'<p>Presione Ctrl (windows) / Command (Mac) para seleccionar varias opciones.</p>';
//	};
	var self = this;

    EJS.renderFile('views/quizes/seleccion_multiple.ejs',{resp: this.respuestas},
    function(err,vista){
    if(err) throw err;
    else self.vista = vista;
  });
}

seleccionMultiple.prototype = new Pregunta();
seleccionMultiple.prototype.constructor = seleccionMultiple;

module.exports = seleccionMultiple;