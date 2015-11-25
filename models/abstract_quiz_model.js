Math.randomInt = function(x) {
  return Math.floor(Math.random()*x);
}

function AbstractQuiz(q) {
   this.q = q || [];
}

AbstractQuiz.prototype.randomQuestion = function() {
    var index = Math.randomInt(this.q.length);
    return this.q[index];
}

AbstractQuiz.prototype.npreguntas = function() {
  return this.q.length;
}

AbstractQuiz.prototype.getCuestionario = function(x){
  return this.q[x];
}

AbstractQuiz.prototype.gettodas = function(){
    var aux = [];
    for (var i = 0; i < this.q.length; i++){aux[i] = this.getCuestionario(i).pregunta; }
    //for (var i = 0; i < this.q.length; i++){aux[i] = this.getCuestionario(i).pregunta.getEnunciado(); }
    return aux;
}

module.exports = AbstractQuiz;