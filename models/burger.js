"use strict";

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {

    underscored: true,

    freezeTableName: true,

    tableName: 'burgers',

  });

  return Burger;
};
