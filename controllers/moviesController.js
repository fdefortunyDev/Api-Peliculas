//Aquí esta la exportación de nuestra base de datos ficticia (recordar que es un array)
const path = require('path');
const db = require(path.join('..','database','database.json'));
const fs = require('fs');

const moviesController = {
   list: (req, res) => {
      //Este controlador debe mostrar el listado de películas

      res.status(200).json(db);
      
   },

   detail: (req, res) => {
      //Este controlador debe mostar el detalle de una pelicula especificado por un ID
      const id = req.params.id;

      let pelicula = db.filter((el)=> el.id == id)
      if(pelicula[0]){
         res.status(200).json(pelicula[0]);
      }else{
         res.status(500).json({msg:"id no válido"});
      }

   },

   create: (req, res) => {
      //Este controlador debe agregar una nueva película a nuestra base de datos
      try {
         const peliculaJSON = req.body; // esta vacio..
         const peliculaString = JSON.stringify(peliculaJSON);
         fs.appendFileSync('database.json', peliculaString);
   
         res.status(200).json(peliculaString); //muestro lo que se agrega
      } catch (error) {
         res.status(500).json({msg: error});
      }

   },

   destroy: (req, res) => {
      //Este controlador debe borrar una película de nuestra base de datos
      const id = req.params.id;
      const aEliminar = db.filter((el)=> el.id == id);
      const newArray = db.filter((el)=> el.id !== id);
      if(aEliminar[0]){
         //falta que se elimine de la db
         
         
         
         res.status(200).json(newArray);//muestro lo que se elimina
      }else{
         res.status(500).json({msg: "no se encuentra ese id"});
      }

   }
}

module.exports = moviesController;