import React, { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext';

export default function SearchDoctor() {

  const { handleSearchDoctor } = useContext(DoctorContext);

  return (
    <button onClick={handleSearchDoctor}>
      Procurar Médico
    </button>
  )
}
