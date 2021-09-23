let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');

//Muestra un listado de las canciones con sus propiedades - por GET
router.get(
    '/',
    mainController.index
);

//Crear un nuevo registro de una canción - por POST
router.post(
    '/',
    mainController.agregarCanciones
);

//Muestra una cancion. -por GET
router.get(
    '/:id',
    mainController.cancion
);

//Edita una canción - por PUT    
router.put(
    '/:id',
    mainController.editarCancion
);

//Elimina una canción - por DELETE
router.delete(
    '/:id',
    mainController.eliminarCancion
);

//listado de canciones que coincidan con el género - por GET
router.get(
    '/generos/:id',
    mainController.listadoCancionesSegunGenero
);


module.exports= router;