const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRoutes');
const landingRoute = require('./src/routes/landingRoute');


app.use(express.urlencoded ({ extended:false }));
app.use(express.json());

// Introduccion al trabajo
app.use('/', landingRoute)


// Endpoints solicitados
app.use('/canciones', mainRouter) 

// Server
app.listen(
    3002, () => console.log('Servidor corriendo en el puerto 3002')
);