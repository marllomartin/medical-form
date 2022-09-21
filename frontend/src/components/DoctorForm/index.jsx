import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

import { ButtonArea, Container, Form, InputContainer, InputGroup, SelectContainer } from "./styles";
import { createDoctor, getDoctors, getExpertises, updateDoctor } from "../../services/api";

export default function DoctorForm() {

  const ufList = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MT", "MS", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "RO", "RR", "SP", "SC", "SE", "TO", "BR"];

  const {
    setDoctorsList,
    setIsLoading,
    isEditing, setIsEditing,
    id, setId,
    name, setName, handleChangeName,
    uf, handleChangeUf,
    crm, setCrm, handleChangeCrm,
    phone, setPhone,
    firstExpertise, setFirstExpertise, handleChangeFirstExpertise,
    secondExpertise, setSecondExpertise, handleChangeSecondExpertise
  } = useContext(DoctorContext);

  const [expertises, setExpertises] = useState([]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const responseExpertises = await getExpertises();
      const responseDoctors = await getDoctors();
      setExpertises(responseExpertises.data);
      setDoctorsList(responseDoctors.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const expertises = [
      { id: firstExpertise },
      { id: secondExpertise }
    ];

    if (isEditing) {
      await updateDoctor(id, name, uf, crm, phone, expertises);
    } else {
      await createDoctor(name, uf, crm, phone, expertises);
    }

    await loadData();

    setName("");
    setCrm("");
    setPhone("");
    setFirstExpertise("1");
    setSecondExpertise("1");
    setId(false);
    setIsEditing(false);
  }

  useEffect(() => {
    loadData();
  }, [])

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
              placeholder="DDD + Número"
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
              {expertises?.map((expertise) => (
                <option
                  key={expertise.id}
                  value={expertise.id}
                >
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
              {expertises?.map((expertise) => (
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