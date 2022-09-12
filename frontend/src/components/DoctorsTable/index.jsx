import React from "react";
import { useAxios } from "../../hooks/useAxios";
import DoctorsData from "../DoctorsData";

import { Table } from "./styles";

export default function DoctorsTable() {

  const { data } = useAxios("doctors");

  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CRM</th>
          <th>Telefone</th>
          <th>Especialidades</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((doctor) => (
            <DoctorsData
              key={doctor.id ? doctor.id : Math.random()}
              id={doctor.id}
              name={doctor.name}
              crm={doctor.crm}
              phone={doctor.phone}
              expertise={doctor.expertise}
            />
          ))
        }
      </tbody>
    </Table>
  )
}