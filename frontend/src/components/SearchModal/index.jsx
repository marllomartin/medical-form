import React, { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';

export default function SearchModal() {

  const {
    handleCloseSearchModal,
    search, handleChangeSearch,
    handleSearch
  } = useContext(DoctorContext);

  return (
    <div>
      <button type="button" onClick={handleCloseSearchModal}>Fechar</button>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">CRM do médico a ser pesquisado:</label>
        <input
          id="search"
          type="number"
          value={search}
          onChange={handleChangeSearch}
          required={true}
        />

        <button type="submit">Pesquisar</button>
      </form>
    </div>
  )
}
