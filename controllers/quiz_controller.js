var models = require('../models/models.js');
//GET quizes/question
exports.question = function(req, res){
  models.Quiz.findAll().then(function(quiz){
   res.render('quizes/question',{title:'Quiz: Pregunta 1', pregunta:quiz[0].pregunta});
 })
};
//GET /quizes/answer
exports.answer = function(req,res){
  models.Quiz.findAll().then(function(quiz){
  if(req.query.respuesta===quiz[0].respuesta){
  	res.render('quizes/answer',{title:'Quiz: Respuesta 1', respuesta:'Correcto'});
  }
  else{
  	res.render('quizes/answer',{title:'Quiz: Respuesta 1', respuesta:'Incorrecto'});
  }
 })
};
