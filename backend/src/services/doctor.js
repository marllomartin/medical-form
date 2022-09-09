const { doctor } = require('../database/models');

const findAllDoctors = async () => {
  const findDoctors = await doctor.findAll();

  return findDoctors;
};

const findByIdDoctor = async (id) => {
  const findDoctor = await doctor.findByPk(id);

  return findDoctor;
};

const createDoctor = async (newDoctor) => {
  const createdDoctor = await doctor.create(newDoctor);

  return createdDoctor;
};

const updateDoctor = async (id, data) => {
  const doctorExists = await doctor.findByPk(id);
  if (!doctorExists) throw new Error('Médico não encontrado');

  const updatedDoctor = await doctor.update(data, { where: { id } });

  return updatedDoctor;
};

const deleteDoctor = async (id) => {
  const doctorExists = await doctor.findByPk(id);
  if (!doctorExists) throw new Error('Médico não encontrado');

  await doctor.destroy({ where: { id } });
};

module.exports = {
  findAllDoctors,
  findByIdDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
