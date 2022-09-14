import React, { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

import { ButtonArea, Container, Form, InputContainer, InputGroup, SelectContainer } from "./styles";
import { useAxios } from "../../hooks/useAxios";

export default function DoctorForm() {

  const ufList = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MT", "MS", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "RO", "RR", "SP", "SC", "SE", "TO", "BR"];

  const {
    name, handleChangeName,
    uf, handleChangeUf,
    crm, handleChangeCrm,
    phone, setPhone,
    firstExpertise, handleChangeFirstExpertise,
    secondExpertise, handleChangeSecondExpertise,
    isEditing, handleSubmit
  } = useContext(DoctorContext);

  const { data } = useAxios("expertises");

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
              country="BR"
              defaultCountry="BR"
              value={phone}
              placeholder="DD + Número"
              onChange={setPhone}
              required={true}
            />
          </InputGroup>
        </InputContainer>
        <InputGroup>
          <label htmlFor="expertise">Especialidades: </label>
          <SelectContainer>
            <select
              id="expertise"
              value={firstExpertise}
              onChange={handleChangeFirstExpertise}
              required={true}
            >
              {data?.map((expertise) => (
                <option value={expertise.id} key={expertise.id}>
                  {expertise.name}
                </option>
              ))}
            </select>
            <select
              id="secondExpertise"
              value={secondExpertise}
              onChange={handleChangeSecondExpertise}
              required={true}
            >
              {data?.map((expertise) => (
                <option value={expertise.id} key={expertise.id}>
                  {expertise.name}
                </option>
              ))}
            </select>
          </SelectContainer>
        </InputGroup>
        <ButtonArea>
          <button
            onClick={handleSubmit}
            className="button"
            data-edit={isEditing}
            disabled={firstExpertise === secondExpertise}
          >
            {isEditing ? "Editar" : "Cadastrar"}
          </button>
        </ButtonArea>
      </Form>
    </Container>
  )
}