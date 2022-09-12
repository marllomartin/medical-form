import React, { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

import { ButtonArea, Container, Form, InputContainer, InputGroup } from "./styles";

export default function DoctorForm() {

  const ufList = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MT", "MS", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "RO", "RR", "SP", "SC", "SE", "TO", "BR"];

  const {
    name, handleChangeName,
    uf, handleChangeUf,
    crm, handleChangeCrm,
    phone, setPhone,
    expertise, handleChangeExpertise,
    isEditing, handleSubmit
  } = useContext(DoctorContext);

  return (
    <Container>
      <header>{isEditing ? "Alterar Cadastro" : "Novo Cadastro"}</header>
      <Form>
        <InputContainer>
          <InputGroup>
            <label htmlFor="name">Nome do médico: </label>
            <input
              id="name"
              type="text"
              placeholder="Nome e Sobrenome"
              value={name}
              onChange={handleChangeName}
              required={true}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="uf">UF: </label>
            <select
              id="uf"
              value={uf}
              onChange={handleChangeUf}
              required={true}
            >
              {ufList.map((uf, index) => (
                <option value={uf} key={index}>
                  {uf}
                </option>
              ))}
            </select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="crm">CRM: </label>
            <input
              id="crm"
              type="number"
              placeholder="Código de 6 dígitos"
              minLength="6"
              value={crm}
              onChange={handleChangeCrm}
              required={true}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="phone">Telefone: </label>
            <PhoneInput
              defaultCountry="BR"
              value={phone}
              placeholder="DD + Número"
              onChange={setPhone}
            />
          </InputGroup>
        </InputContainer>
        <label htmlFor="expertise">Especialidades: </label>
        <input
          id="expertise"
          type="text"
          placeholder="Ex: Pediatria, Fonoaudiologia"
          value={expertise}
          onChange={handleChangeExpertise}
          required={true}
        />
        <ButtonArea>
          <button
            className="button"
            onClick={handleSubmit}
            data-edit={isEditing}
          >
            {isEditing ? "Editar" : "Cadastrar"}
          </button>
        </ButtonArea>
      </Form>
    </Container>
  )
}