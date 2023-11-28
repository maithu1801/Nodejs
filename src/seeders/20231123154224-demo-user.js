'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users',[{
    fullname: 'Phan Van',
    email: 'abc@gmail.com',
    password: '12345',
    phonenumber: '',
    roleId: 'R1',
    positionId: 'P1',
    createdAt: new Date(),
    updatedAt: new Date()
   }])
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
