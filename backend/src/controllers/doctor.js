const { StatusCodes } = require('http-status-codes');
const DoctorService = require('../services/doctor');

const findAllDoctors = async (_req, res) => {
  try {
    const result = await DoctorService.findAllDoctors();
    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: Error.message });
  }
};

const findByIdDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await DoctorService.findByIdDoctor(id);
    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: Error.message });
  }
};

const createDoctor = async (req, res) => {
  const newDoctor = req.body;

  try {
    const result = await DoctorService.createDoctor(newDoctor);
    return res.status(StatusCodes.CREATED).send(result);
  } catch (Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: Error.message });
  }
};

const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const result = await DoctorService.updateDoctor(id, data);
    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: Error.message });
  }
};

const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    await DoctorService.deleteDoctor(id);
    return res.status(StatusCodes.OK).json({ message: `Médico de ID número ${id} excluído com sucesso` });
  } catch (Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: Error.message });
  }
};

module.exports = {
  findAllDoctors,
  findByIdDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
