const { doctor } = require('../database/models');

const findAllDoctors = async () => {
  const findDoctors = await doctor.findAll();

  return findDoctors;
};

const findByCrmDoctor = async (crm) => {
  const findDoctor = await doctor.findOne({ where: { crm } });
  if (!findDoctor) throw new Error('Médico não encontrado');

  return findDoctor;
};

const createDoctor = async (newDoctor) => {
  const { crm } = newDoctor;
  const doctorExists = await doctor.findOne({ where: { crm } });
  if (doctorExists) throw new Error('Médico já registrado');

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
  findByCrmDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
