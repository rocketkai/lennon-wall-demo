'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // FK name is <Model>Id by default in Sequelize
    return queryInterface.addColumn('Posts', 'WallId', Sequelize.INTEGER)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'WallId');
  }
};
