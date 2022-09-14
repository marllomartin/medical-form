const { doctor, doctorExpertise, expertise } = require('../database/models');

const findAllDoctors = async () => {
  const findDoctors = await doctor.findAll({
    include: [
      { model: expertise, as: 'expertises' },
    ],
  });

  return findDoctors;
};

const createDoctor = async (data) => {
  const { name, uf, crm, phone, expertises } = data;
  const doctorExists = await doctor.findOne({ where: { crm } });

  if (doctorExists) throw new Error('Médico já registrado');

  const newDoctor = await doctor.create({
    name,
    uf,
    crm,
    phone
  });

  const newDoctorExpertise = await expertises.map((expertise) => ({
    doctorId: newDoctor.id,
    expertiseId: expertise.id
  }))

  await doctorExpertise.bulkCreate(newDoctorExpertise)

  return newDoctor;
};

const updateDoctor = async (id, data) => {
  const { name, uf, crm, phone, expertises } = data;
  const doctorExists = await doctor.findByPk(id);

  if (!doctorExists) throw new Error('Médico não encontrado');

  const updatedDoctor = await doctor.update({
    name,
    uf,
    crm,
    phone
  }, { where: { id } });

  const deleteDoctorExpertise = doctorExpertise.destroy({ where: { doctorId: id } });

  const updatedExpertise = expertises.map((expertise) => ({
    doctorId: id,
    expertiseId: expertise.id
  }))

  const updateDoctorExpertise = doctorExpertise.bulkCreate(updatedExpertise)

  await Promise.all([deleteDoctorExpertise, updatedExpertise, updateDoctorExpertise])

  return updatedDoctor;
};

const deleteDoctor = async (id) => {
  const doctorExists = await doctor.findByPk(id);

  if (!doctorExists) throw new Error('Médico não encontrado');

  await doctor.destroy({ where: { id } });
};

module.exports = {
  findAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
