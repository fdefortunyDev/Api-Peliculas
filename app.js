const express = require('express');
const moviesRoutes = require('./routes/moviesRoutes');

const app = express();

//Esto es para parsear el body que viene en formato JSON
app.use(express.json());

//Aquí debajo van las Rutas a los endpoints
//Por ejemplo: '/api'

app.use('/api', moviesRoutes);



//Levantar servidor desde express
app.listen(3000, () => {
   console.log('Servidor corriendo en puerto 3000');
});