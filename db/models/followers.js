'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  followers.init({
    id: DataTypes.UUID,
    user_id: DataTypes.UUID,
    follower_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'followers',
  });
  return followers;
};