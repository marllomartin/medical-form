const { StatusCodes } = require('http-status-codes');
const ExpertiseService = require('../services/expertise');

const findAllExpertises = async (_req, res) => {
  try {
    const result = await ExpertiseService.findAllExpertises();
    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: Error.message });
  }
};

module.exports = { findAllExpertises };
