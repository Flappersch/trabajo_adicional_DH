let db = require('../database/models');

let mainController = {
    //muestra un listado de las canciones con sus propiedades - por GET
    index: (req, res) => {
        db.Cancion.findAll({

        })
        .then(canciones => {
            res.status(200).json({
                title: 'Canciones',
                status: 200,
                canciones
            });
        })
        .catch(err => {
            res.status(500).json({
                err,
                status: 500
            })
        });
    },
    //para crear un nuevo registro de una canción - por POST
    // utilizando Postman
    agregarCanciones: function(req, res) {
        db.Cancion.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            generoId: req.body.generoId,
            artistaId: req.body.artistaId,
            albumId: req.body.albumId
        })

        .then(cancion => {
            res.json({
                mensaje: 'Cancion creada correctamente, lo puedes chequear en Workbench o visualizado nuevamente el listado de canciones en http://localhost:3002/canciones',
                status: 200,
                cancion
             });
        
        }).catch(error =>{
            res.json(error);
        })


    },
    //muestra una cancion. -por GET
    cancion: function(req,res){
        db.Cancion.findByPk(req.params.id,{
           attributes: 
           [
               'id',
               'titulo', 
               'duracion', 
               'genero_id', 
               'artista_id', 
               'album_id'
           ]
        })
        .then(cancion =>{
            return res.json(cancion);
        })
        .catch(error =>{
            res.json(error);
        })
    },
    
    //para editar una canción - por PUT 
    // utilizando Postman   
    editarCancion: function(req,res){
        db.Cancion.update({
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                generoId: req.body.generoId,
                artistaId: req.body.artistaId,
                albumId: req.body.albumId
            },
            {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            return res.json({
                mensaje:'Cancion editada correctamente, lo puedes chequear en Workbench o visualizado nuevamente el listado de canciones en http://localhost:3002/canciones',
                status: 200,
            });
        })
    },
 
    //eliminar una canción - por DELETE
    // utilizando Postman
    eliminarCancion: function(req,res){
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            return res.json({
            mensaje: 'Registro eliminado correctamente, puedes chequearlo en Workbench o visualizando nuevamente el listado de canciones en http://localhost:3002/canciones',
            status: 200
            });
        })
    },
    //listado de canciones que coincidan con el género - por GET
    listadoCancionesSegunGenero: (req, res) => {
        db.Genero.findByPk(req.params.id, {
            attributes: ['name'],
            include: {
                model: db.Cancion,
                as: 'canciones',
                attributes: ['titulo','duracion','genero_id', 'album_id', 'artista_id']
            },
        })
        .then(genero => {
                res.status(200).json({
                title: 'Listado de canciones que coinciden con el género seleccionado',
                status: 200,
                genero
            });
        })
        .catch(err => {
            res.status(500).json({
                err,
                status: 500
            })
        });
    },
};

module.exports = mainController;