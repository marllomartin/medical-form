import React, { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";

import { Container, Form, InputContainer, InputGroup } from "./styles";

export default function DoctorForm() {

  const {
    name, handleChangeName,
    crm, handleChangeCrm,
    phone, handleChangePhone,
    expertise, handleChangeExpertise,
    isEditing, handleSubmit
  } = useContext(DoctorContext);

  return (
    <Container>
      <header>{isEditing ? "Alterar Cadastro" : "Novo Cadastro"}</header>
      <Form>
        <InputContainer>
          <InputGroup>
            <label htmlFor="name">Nome: </label>
            <input
              id="name"
              type="text"
              placeholder="Nome e Sobrenome"
              value={name}
              onChange={handleChangeName}
              required={true}
            />
            <label htmlFor="crm">CRM: </label>
            <input
              id="crm"
              type="number"
              placeholder="XXXXXX"
              value={crm}
              onChange={handleChangeCrm}
              required={true}
            />
            <label htmlFor="phone">Telefone: </label>
            <input
              id="title"
              type="text"
              placeholder="(XX)XXXX-XXXX"
              value={phone}
              onChange={handleChangePhone}
              required={true}
            />
          </InputGroup>
          <label htmlFor="expertise">Especialidades: </label>
          <input
            id="expertise"
            type="text"
            placeholder="Ex: Pediatria, Fonoaudiologia"
            value={expertise}
            onChange={handleChangeExpertise}
            required={true}
          />
        </InputContainer>
        <button onClick={handleSubmit}>
          {isEditing ? "Editar" : "Cadastrar"}
        </button>
      </Form>
    </Container>
  )
}