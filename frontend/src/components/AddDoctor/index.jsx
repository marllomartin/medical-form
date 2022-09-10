import React, { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AddDoctorButton } from './styles';

export default function AddDoctor() {

  const { handleAddDoctor } = useContext(DoctorContext);

  return (
    <AddDoctorButton onClick={handleAddDoctor}>
      Cadastrar Médico
    </AddDoctorButton>
  )
}
