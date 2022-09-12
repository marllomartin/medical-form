import React, { useContext } from 'react';
import { DoctorContext } from "../../context/DoctorContext";
import { Container } from './styles';

export default function DoctorSearch() {

  const { search, setSearch } = useContext(DoctorContext)

  return (
    <Container>
        <header htmlFor="search">Procurar Cadastro</header>
        <input
          id="seach"
          type="text"
          value={search}
          placeholder="Procurar médico por nome ou código CRM"
          onChange={(e) => setSearch(e.target.value)}
        />
    </Container>
  )
}
