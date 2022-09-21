import React, { useCallback, useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";

import { IoPencil, IoClose } from "react-icons/io5"
import { ButtonArea, Container, Table } from "./styles";
import { deleteDoctor, getDoctors } from "../../services/api";

export default function DoctorsTable() {
  const {
    doctorsList, setDoctorsList,
    isLoading, setIsLoading,
    search,
    setIsEditing,
    setId, setName,
    setUf, setCrm,
    setPhone,
    setFirstExpertise,
    setSecondExpertise } = useContext(DoctorContext);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const responseDoctors = await getDoctors();
      setDoctorsList(responseDoctors.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [setDoctorsList, setIsLoading]);

  const handleDeleteDoctor = async (id) => {
    await deleteDoctor(id);
    await loadData();
  }

  const handleEditDoctor = async (id, name, uf, crm, phone, firstExpertise, secondExpertise) => {
    setIsEditing(true);
    setId(id);
    setName(name);
    setUf(uf);
    setCrm(crm);
    setPhone(phone);
    setFirstExpertise(firstExpertise);
    setSecondExpertise(secondExpertise);
  }

  useEffect(() => {
    loadData();
  }, [loadData])

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
        {isLoading ? <tbody><tr><td>Carregando...</td></tr></tbody> :
          <tbody>
            {
              doctorsList?.filter((doctor) =>
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
                        onClick={() => {
                          handleEditDoctor(doctor.id, doctor.name,
                            doctor.uf, doctor.crm, doctor.phone,
                            doctor.expertises[0].id, doctor.expertises[1].id
                          )
                        }
                        }
                        className="button-edit"
                      >
                        <IoPencil />
                      </button>
                      <button
                        onClick={() => { handleDeleteDoctor(doctor.id) }}
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
        }
      </Table>
    </Container>
  )
}