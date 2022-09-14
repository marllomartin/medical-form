const Expertise = (sequelize, DataTypes) => {
  const Expertise = sequelize.define("expertise", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false,
    });

  return Expertise;
};

module.exports = Expertise;
