'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const result = await queryInterface.bulkInsert('Humans', [
      {
        name: 'Adan',
        genre:'H',
        age: 12,
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Eva',
        genre:'M',
        age: 16,
        createdAt: new Date,
        updatedAt: new Date
      }
  
    ], {});
    await queryInterface.bulkInsert('Humans', [
      {
        name: 'Cain',
        genre:'H',
        age: 12,
        createdAt: new Date,
        updatedAt: new Date,
        parentId: 1
      },{
        name: 'Abel',
        genre:'H',
        age: 16,
        createdAt: new Date,
        updatedAt: new Date,
        parentId: 1
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
