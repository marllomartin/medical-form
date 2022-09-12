import React, { useContext } from 'react';
import { DoctorContext } from "../../context/DoctorContext";

export default function DoctorsData({ id, name, crm, phone, expertise }) {

  const { handleEdit, handleDelete } = useContext(DoctorContext);

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{crm}</td>
      <td>{phone}</td>
      <td>{expertise}</td>
      <td>
        <button onClick={() => handleEdit(id, name, crm, phone, expertise)}>Editar</button>
        <button onClick={() => handleDelete(id)}>Deletar</button>
      </td>
    </tr>
  )
}
