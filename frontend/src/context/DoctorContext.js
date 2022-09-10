import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import AddModal from "../components/AddModal";
import SearchModal from "../components/SearchModal";
import api from "../services/api";

export const DoctorContext = createContext();

export function DoctorContextProvider({ children }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const [name, setName] = useState("");
  const [crm, setCrm] = useState("");
  const [phone, setPhone] = useState("");
  const [expertise, setExpertise] = useState([])

  const [search, setSearch] = useState("");

  function handleAddDoctor() {
    setOpenAddModal(true);
    setOpenSearchModal(false);
  }

  function handleSearchDoctor() {
    setOpenSearchModal(true);
    setOpenAddModal(false);
  }

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

  function handleCloseAddModal() {
    if (name) {
      setName("");
    }
    if (crm) {
      setCrm("");
    }
    if (phone) {
      setPhone("");
    }
    if (expertise) {
      setExpertise([]);
    }
    setOpenAddModal(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = { name, crm, phone, expertise };
    api.post("doctors", data);

    setName("");
    setCrm("");
    setPhone("")
    setExpertise([]);
    setOpenAddModal(false);
  }

  function handleCloseSearchModal() {
    if (search) {
      setSearch("");
    }

    setOpenSearchModal(false);
  }

  function handleSearch(search) {
    api.get(`doctors/${search}`)
  }

  function handleDelete(id) {
    api.delete(`doctors/${id}`);
  }

  return (
    <DoctorContext.Provider value={{
      handleAddDoctor,
      handleSearchDoctor,
      handleCloseAddModal,
      handleCloseSearchModal,
      handleChangeName,
      handleChangeCrm,
      handleChangePhone,
      handleChangeExpertise,
      handleChangeSearch,
      handleSubmit,
      handleSearch,
      handleDelete,
      name, setName,
      crm, setCrm,
      phone, setPhone,
      expertise, setExpertise
    }}>
      {children}
      {openAddModal && <AddModal />}
      {openSearchModal && <SearchModal />}
    </DoctorContext.Provider>
  )
}

DoctorContextProvider.propTypes = {
  children: PropTypes.any
}.isRequired;
