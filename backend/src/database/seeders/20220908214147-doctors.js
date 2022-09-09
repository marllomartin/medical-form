'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('doctors',
    [
      {
        name: 'Doutora Deolane',
        crm: '1538296',
        expertise: 'Fonoaudiologia',
        phone: '+55(21)91234-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Doutor Peludo',
        crm: '7654321',
        expertise: 'Proctologia',
        phone: '+55(35)91234-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Doutor Mundo',
        crm: '1234567',
        expertise: 'Endocrinologia',
        phone: '+55(66)91234-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('doctors', null, {}),
};