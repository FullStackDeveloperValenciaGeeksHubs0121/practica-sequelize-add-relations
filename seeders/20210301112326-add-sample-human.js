'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const result = await queryInterface.bulkInsert('Humans', [
      {
        name: 'Mario',
        genre:'H',
        age: 12,
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Lucia',
        genre:'M',
        age: 16,
        createdAt: new Date,
        updatedAt: new Date
      }
  
    ], {});
    console.log(result);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
