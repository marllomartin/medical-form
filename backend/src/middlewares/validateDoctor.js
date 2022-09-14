const { StatusCodes } = require('http-status-codes');

const validateDoctor = (req, res, next) => {
  const {
    name,
    crm,
    expertises,
    phone,
  } = req.body;

  if (!name || !crm || !expertises || !phone) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Requisição inválida' });
  }

  return next();
};

module.exports = validateDoctor;
