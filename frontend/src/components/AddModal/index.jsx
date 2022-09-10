import React, { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';

export default function AddModal() {

  const {
    handleCloseAddModal,
    name, handleChangeName,
    crm, handleChangeCrm,
    phone, handleChangePhone,
    expertise, handleChangeExpertise,
    handleSubmit
  } = useContext(DoctorContext);

  return (
    <div>
      <button type="button" onClick={handleCloseAddModal}>Fechar</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do médico:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChangeName}
          required={true}
        />

        <label htmlFor="expertise">Especialidades:</label>
        <input
          id="expertise"
          type="text"
          value={expertise}
          onChange={handleChangeExpertise}
          required={true}
        />

        <label htmlFor="crm">CRM:</label>
        <input
          id="crm"
          type="number"
          value={crm}
          onChange={handleChangeCrm}
          required={true}
        />

        <label htmlFor="phone">Telefone:</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={handleChangePhone}
          required={true}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
