module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('doctorExpertises',
      [
        {
          doctorId: 1,
          expertiseId: 1,
        },
        {
          doctorId: 1,
          expertiseId: 5,
        },
        {
          doctorId: 2,
          expertiseId: 2,
        },
        {
          doctorId: 2,
          expertiseId: 8,
        },
        {
          doctorId: 3,
          expertiseId: 3,
        },
        {
          doctorId: 3,
          expertiseId: 7,
        },
        {
          doctorId: 4,
          expertiseId: 4,
        }
        ,
        {
          doctorId: 4,
          expertiseId: 2,
        },
        {
          doctorId: 5,
          expertiseId: 7,
        },
        {
          doctorId: 5,
          expertiseId: 4,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('doctorExpertises', null, {});
  },
};
