const {Router} = require("express");
const router = Router();
const _ = require("underscore");

const movies  = require("../ejemplo.json");

router.get("/",(req ,res) =>{
   res.json(movies);
});

router.post("/",(req , res) =>{
  const {titulo,director,año,puntuacion} = req.body; 
  if(titulo && director && año && puntuacion){
      const id =  movies.length + 1;
      const newMovie = {...req.body , id};
      movies.push(newMovie);
      res.json(movies);
  }else{
      res.json({error : "Ocurrio un error"});
  }
});

router.delete("/:id",(req,res) =>{
    const {id} = req.params;
    _.each(movies,(movie,i) =>{
       if(movie.id == id){
           movies.splice(i,1);
       }
    });
   res.send(movies);
});

module.exports = router;