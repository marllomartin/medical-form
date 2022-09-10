'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('doctors',
    [
      {
        id: 1,
        name: 'Leila Martinez',
        crm: 'CRM/SP 123456',
        phone: '+55(11)91234-5678',
        expertise: 'Fonoaudiologia',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Marcos da Silva Passos',
        crm: 'CRM/RN 123456',
        phone: '+55(84)91234-5678',
        expertise: 'Fonoaudiologia',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Fulano Gomes',
        crm: 'CRM/RJ 123456',
        phone: '+55(21)91234-5678',
        expertise: 'Fonoaudiologia',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('doctors', null, {}),
};