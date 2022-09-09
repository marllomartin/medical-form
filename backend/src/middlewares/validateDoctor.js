const { StatusCodes } = require('http-status-codes');

const validateDoctor = (req, res, next) => {
  const {
    name,
    crm,
    expertise,
    phone,
  } = req.body;

  if (!name || !crm || !expertise || !phone) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Requisição inválida' });
  }

  return next();
};

module.exports = validateDoctor;
