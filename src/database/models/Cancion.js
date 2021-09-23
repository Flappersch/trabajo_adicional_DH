module.exports = (sequelize, DataTypes) => {
    let alias = 'Cancion';
    let columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        // deletedAt: 'deleted_at'
        generoId: {
            type: DataTypes.INTEGER,
            field: 'genero_id'
        },
        albumId: {
            type: DataTypes.INTEGER,
            field: 'album_id'
        },
        artistaId: {
            type: DataTypes.INTEGER,
            field: 'artista_id'
        },
    };
    let config = {
        underscored: true,
        tableName: 'canciones',
        timestamps: true,
        // paranoid: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };
    let Cancion = sequelize.define(
        alias,
        columns,
        config
    );
    Cancion.associate = (model) => {
         Cancion.associate = (model) => {
            Cancion.belongsTo(model.Genero, {
                as: 'generos',
                foreignKey: 'genero_id',
            });
            Cancion.belongsTo(model.Album, {
                as: 'albumes',
                foreignKey: 'album_id',
            });
            Cancion.belongsTo(model.Artista, {
                as: 'artistas',
                foreignKey: 'artista_id',
            });
        }
    };
    return Cancion;
};