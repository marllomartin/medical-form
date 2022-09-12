import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import api from "../services/api";
import { useAxios } from "../hooks/useAxios";

export const DoctorContext = createContext();

export function DoctorContextProvider({ children }) {
  const { data, mutate } = useAxios("doctors");

  const [name, setName] = useState("");
  const [crm, setCrm] = useState("");
  const [phone, setPhone] = useState("");
  const [expertise, setExpertise] = useState([])

  const [isEditing, setIsEditing] = useState(false);

  const [search, setSearch] = useState("");

  const [id, setId] = useState(false);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeCrm(event) {
    setCrm(event.target.value);
  }

  function handleChangePhone(event) {
    setPhone(event.target.value);
  }

  function handleChangeExpertise(event) {
    setExpertise(event.target.value);
  }

  function handleChangeSearch(event) {
    setSearch(event.target.value);
  }

  function handleEdit(id, name, crm, phone, expertise) {
    setIsEditing(true);
    setId(id);
    setName(name);
    setCrm(crm);
    setPhone(phone);
    setExpertise(expertise);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (id) {
      api.patch(`doctors/${id}`, { name, crm, phone, expertise })

    } else {
      api.post("doctors", { name, crm, phone, expertise });
    }

    setName("");
    setCrm("");
    setPhone("")
    setExpertise([]);
    setId(false);
    setIsEditing(false);
  }

  function handleDelete(id) {
    api.delete(`doctors/${id}`);

    const updatedDoctors = data?.filter((doctor) => doctor.id !== id);

    mutate(updatedDoctors, false);
  }

  return (
    <DoctorContext.Provider value={{
      handleChangeName,
      handleChangeCrm,
      handleChangePhone,
      handleChangeExpertise,
      handleChangeSearch,
      handleEdit,
      handleSubmit,
      handleDelete,
      name, setName,
      crm, setCrm,
      phone, setPhone,
      expertise, setExpertise,
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
