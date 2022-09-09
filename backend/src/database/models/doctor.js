const Doctor = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("doctor", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    crm: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    expertise: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });
  return Doctor;
};

module.exports = Doctor;
