const DoctorExpertise = (sequelize, DataTypes) => {
  const DoctorExpertise = sequelize.define('doctorExpertise', {
    doctorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    expertiseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
    {
      timestamps: false
    });

  DoctorExpertise.associate = (models) => {
    models.doctor.belongsToMany(models.expertise, {
      as: 'expertises',
      through: DoctorExpertise,
      foreignKey: 'doctorId',
      otherKey: 'expertiseId'
    });
    models.expertise.belongsToMany(models.doctor, {
      as: 'doctors',
      through: DoctorExpertise,
      foreignKey: 'expertiseId',
      otherKey: 'doctorId'
    });
  };

  return DoctorExpertise;
};

module.exports = DoctorExpertise;
