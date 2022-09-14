import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import api from "../services/api";
import { useAxios } from "../hooks/useAxios";

export const DoctorContext = createContext();

export function DoctorContextProvider({ children }) {
  const { data, mutate } = useAxios("doctors");

  const [name, setName] = useState("");
  const [uf, setUf] = useState("AC");
  const [crm, setCrm] = useState("");
  const [phone, setPhone] = useState("");
  const [firstExpertise, setFirstExpertise] = useState("")
  const [secondExpertise, setSecondExpertise] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [search, setSearch] = useState("");

  const [id, setId] = useState(false);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeUf(event) {
    setUf(event.target.value);
  }

  function handleChangeCrm(event) {
    setCrm(event.target.value);
  }

  function handleChangePhone(event) {
    setPhone(event.target.value);
  }

  function handleChangeFirstExpertise(event) {
    setFirstExpertise(event.target.value);
  }

  function handleChangeSecondExpertise(event) {
    setSecondExpertise(event.target.value);
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value);
  }

  function handleEdit(id, name, uf, crm, phone, firstExpertise, secondExpertise) {
    setIsEditing(true);
    setId(id);
    setName(name);
    setUf(uf);
    setCrm(crm);
    setPhone(phone);
    setFirstExpertise(firstExpertise);
    setSecondExpertise(secondExpertise);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const expertises = [
      {id: firstExpertise},
      {id: secondExpertise}
    ];

    if (id) {
      
      const doctor = { name, uf, crm, phone, expertises };
      api.patch(`doctors/${id}`, doctor);

      const updatedList =
        data.map((doctor) => {
          if (doctor.id === id) {
            return { ...doctor, name, uf, crm, phone };
          }
          return doctor;
        });

      mutate(updatedList, false);
    } else {
      const doctor = { name, uf, crm, phone, expertises };
      api.post("doctors", { name, uf, crm, phone, expertises });

      const updatedList = [...data, doctor];

      mutate(updatedList, false);
    }

    setName("");
    setCrm("");
    setPhone("")
    setFirstExpertise("");
    setSecondExpertise("")
    setId(false);
    setIsEditing(false);
  }

  function handleDelete(id) {
    api.delete(`doctors/${id}`);

    const updatedList = data?.filter((doctor) => doctor.id !== id);

    mutate(updatedList, false);

    setName("");
    setCrm("");
    setPhone("")
    setFirstExpertise("");
    setSecondExpertise("")
    setId(false);
    setIsEditing(false);
  }

  return (
    <DoctorContext.Provider value={{
      handleChangeName,
      handleChangeUf,
      handleChangeCrm,
      handleChangePhone,
      handleChangeFirstExpertise,
      handleChangeSecondExpertise,
      handleChangeSearch,
      handleEdit,
      handleSubmit,
      handleDelete,
      name, setName,
      uf, setUf,
      crm, setCrm,
      phone, setPhone,
      firstExpertise, setFirstExpertise,
      secondExpertise, setSecondExpertise,
      isEditing, setIsEditing,
      search, setSearch,
      id, setId
    }}>
      {children}
    </DoctorContext.Provider>
  )
}

DoctorContextProvider.propTypes = {
  children: PropTypes.any
}.isRequired;
