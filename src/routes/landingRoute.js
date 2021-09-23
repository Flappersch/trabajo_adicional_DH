let express = require('express');
let landigRoute = express.Router();
let landingController = require('../controllers/landingController');

//Descripcion del trabajo
landigRoute.get(
    '/',
    landingController.descriptionTrabajo
);

module.exports= landigRoute;