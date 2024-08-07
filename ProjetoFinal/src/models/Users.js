const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            NomeUsuario: DataTypes.STRING,
            emailUsuario: DataTypes.STRING,
            SenhaUsuario: DataTypes.STRING,
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'Usuarios'
        });
    }
}

module.exports = User;
