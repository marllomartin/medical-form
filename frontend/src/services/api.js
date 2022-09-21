import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getDoctors = async () => {
  return api.get("doctors");
};

export const getExpertises = async () => {
  return api.get("expertises");
};

export const createDoctor = async (name, uf, crm, phone, expertises) => {
  return api.post("doctors", { name, uf, crm, phone, expertises });
};

export const updateDoctor = async (id, name, uf, crm, phone, expertises) => {
  return api.patch(`doctors/${id}`, { name, uf, crm, phone, expertises });
};

export const deleteDoctor = async (id) => {
  return api.delete(`doctors/${id}`);
};
