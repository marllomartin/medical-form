module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('expertises',
      [
        {
          id: 1,
          name: 'Fonoaudiologia',
        },
        {
          id: 2,
          name: 'Cardiologia',
        },
        {
          id: 3,
          name: 'Hematologia',
        },
        {
          id: 4,
          name: 'Pediatria',
        },
        {
          id: 5,
          name: 'Dermatologia',
        },
        {
          id: 6,
          name: 'Hemoterapia',
        },
        {
          id: 7,
          name: 'Radiologia',
        },
        {
          id: 8,
          name: 'Ginecologia',
        },
        {
          id: 9,
          name: 'Urologia',
        },
        {
          id: 10,
          name: 'Imunologia',
        },
        {
          id: 11,
          name: 'Proctologia',
        },
        {
          id: 12,
          name: 'Neuropediatria',
        },
        {
          id: 13,
          name: 'Oftalmologia',
        },
        {
          id: 14,
          name: 'Anestesiologia',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('expertises', null, {});
  },
};