let landingController = {
    //Presentacion del trabajo adicional.
    descriptionTrabajo: (req, res) => {
        return res.json({
            Descripcion_del_trabajo: 'El presente Trabajo Adicional para DH, consiste en crear el CRUD de una aplicacion que se conecte a una base de datos predefinida (musicando). Solo se ha programado el backend tipo APIREST',
            Otros_detalles:'Es un proyecto de Express, se ha modelado la base de datos mediante Sequelize, y se encuentra presente los siguientes Endpoints:',
            Endpoint_1: '/canciones             (Se visualizaran el total de canciones que existe en nuestra base de datos',
            Endpoint_2: '/canciones/:id         (Se visualizará la canción seleccionada)',
            Endpoint_3: '/canciones/géneros/:id (Se visualizará la totalidad de canciones por cada genero de música seleccionado)',    
            ABM:        'Utilizando Postman, se podrá dar de alta, editar o eliminar canciones',
            Crear_nueva_cancion:    'Por el metodo Post, indicando la url> http://localhost:3002/canciones y definiendo las Keys del body: titulo, duracion, generoId, albumId, artistaId; y completando con el valor deseado, se puede crear un nuevo registro',
            Editar_una_cancion:     'Por el metod Put, indicando la url> http://localhost:3002/canciones/:id y definiendo las Keys del body: titulo, duracion, generoId, albumId, artistaId; y completando con el valor deseado, se puede editar el registro deseado',
            Eliminar_una_cancion:   'Por el metod DELETE, indicando la url> http://localhost:3002/canciones/:id, se puede elimitar la cancion deseada',
            Curso:                  'Programacion Web Full Stack - DigitalHouse',
            Alumno:                 'Federico Schlatter',
            Profesores:             'Uriel Sosa y Sebastian Rellihan',
            Fecha:                  '22/09/21',
            Github:                 'https://github.com/Flappersch/trabajo_adicional_DH.git'

        });
    }   
}
module.exports = landingController;