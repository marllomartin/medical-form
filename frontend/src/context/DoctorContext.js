import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

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
