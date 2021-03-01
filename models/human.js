'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Human extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Movie,{
        as: 'movies',
        foreignKey: 'ownerId'
      });

      this.hasOne(model.Human,{
        as: 'miPadre',
        foreignKey: 'parentId'
      });

      this.hasMany(model.Human,{
        as: 'misHijos',
        foreignKey: 'parentId'
      });

      // define association here
    }
  };
  Human.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Human',
  });
  return Human;
};