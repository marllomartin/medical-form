import React, { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { useAxios } from "../../hooks/useAxios";

import { IoPencil, IoClose } from "react-icons/io5"
import { ButtonArea, Container, Table } from "./styles";

export default function DoctorsTable() {
  const { search, handleEdit, handleDelete } = useContext(DoctorContext);

  const { data } = useAxios("doctors");

  return (
    <Container>
      <header>Médicos Cadastrados</header>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>UF</th>
            <th>CRM</th>
            <th>Telefone</th>
            <th>Especialidades</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.filter((doctor) =>
              doctor.name.toLowerCase().includes(search.toLowerCase()) ||
              doctor.crm.includes(search)
            ).map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.uf}</td>
                <td>{doctor.crm}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.expertises[0].name}, {doctor.expertises[1].name}</td>
                <td>
                  <ButtonArea>
                    <button
                      onClick={() =>
                        handleEdit(doctor.id, doctor.name,
                          doctor.uf, doctor.crm, doctor.phone,
                          doctor.expertises[0].id, doctor.expertises[1].id
                        )
                      }
                      className="button-edit"
                    >
                      <IoPencil />
                    </button>
                    <button
                      onClick={() => handleDelete(doctor.id)}
                      className="button-delete"
                    >
                      <IoClose />
                    </button>
                  </ButtonArea>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}