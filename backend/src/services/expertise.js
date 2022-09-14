const { expertise } = require('../database/models');

const findAllExpertises = async () => {
  const findExpertises = await expertise.findAll();

  return findExpertises;
};

module.exports = { findAllExpertises };
