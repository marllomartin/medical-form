import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { api, createDoctor, updateDoctor } from "../services/api";

export const DoctorContext = createContext();

export function DoctorContextProvider({ children }) {
  const [ doctorsList, setDoctorsList ] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [uf, setUf] = useState("AC");
  const [crm, setCrm] = useState("");
  const [phone, setPhone] = useState("");
  const [firstExpertise, setFirstExpertise] = useState("1")
  const [secondExpertise, setSecondExpertise] = useState("1");

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
      { id: firstExpertise },
      { id: secondExpertise }
    ];

    if (isEditing) {
      updateDoctor(name, uf, crm, phone, expertises);
    } else {
      createDoctor(name, uf, crm, phone, expertises);
    }

    setName("");
    setCrm("");
    setPhone("")
    setFirstExpertise("1");
    setSecondExpertise("1")
    setId(false);
    setIsEditing(false);
  }

  async function handleDelete(id) {
    api.delete(`doctors/${id}`);

    setName("");
    setCrm("");
    setPhone("")
    setFirstExpertise("1");
    setSecondExpertise("1")
    setId(false);
    setIsEditing(false);
  }

  return (
    <DoctorContext.Provider value={{
      doctorsList, setDoctorsList,
      isLoading, setIsLoading,
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
