'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('doctors',
    [
      {
        id: 1,
        name: 'Leila Martinez',
        uf: 'SP',
        crm: '111111',
        phone: '+55(11)91234-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        name: 'Marcos da Silva Passos',
        uf: 'RN',
        crm: '222222',
        phone: '+55(84)91234-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        name: 'Fulano Gomes',
        uf: 'RJ',
        crm: '333333',
        phone: '+55(21)91234-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 4,
        name: 'Lúcio Isolde',
        uf: 'SC',
        crm: '444444',
        phone: '+55(47)91236-5678',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('doctors', null, {}),
};