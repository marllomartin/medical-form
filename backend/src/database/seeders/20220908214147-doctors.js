'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('doctors',
    [
      {
        id: 1,
        name: 'Leila Martinez',
        uf: 'SP',
        crm: '111111',
        phone: '+55(11)91111-1111',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Marcos da Silva Passos',
        uf: 'RN',
        crm: '222222',
        phone: '+55(84)92222-2222',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Pedro Gomes',
        uf: 'RJ',
        crm: '333333',
        phone: '+55(21)93333-3333',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 4,
        name: 'Lúcio Isolde',
        uf: 'SC',
        crm: '444444',
        phone: '+55(47)94444-4444',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 5,
        name: 'Renato Fernando',
        uf: 'PB',
        crm: '555555',
        phone: '+55(83)95555-5555',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('doctors', null, {}),
};