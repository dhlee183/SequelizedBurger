"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('cats', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        burger_name: Sequelize.STRING,
        devoured: {type: Sequelize.BOOLEAN, default: false},
        date: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('burgers');
  }
};