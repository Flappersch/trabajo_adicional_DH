module.exports = (sequelize, DataTypes) => {
    let alias = 'Album';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        duracion: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
    }

    let config = {
        underscored: true,
        tableName: 'albumes',
        timestamps: false,
        paranoid: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8mb4_unicode:ci'
        }
    };

    let Album = sequelize.define(
        alias,
        cols,
        config
    );
    Album.associate = (model) => {
        Album.belongsTo(model.Cancion, {
            as: 'canciones',
            foreignKey: 'album_id',
        });
    };
    return Album;
};