'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Humans', // name of Source model
      'parentId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Humans', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Humans', // name of Source model
      'parentId' // key we want to remove
    );
  }
};
