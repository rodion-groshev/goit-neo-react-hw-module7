import axios from "axios";

const instance = axios.create({
  baseURL: "https://670e6c2c3e715186165470b0.mockapi.io/",
});
export const getContactsApi = async () => {
  const response = await instance.get("/contacts");
  return response.data;
};

export const postContactApi = async (data) => {
  const response = await instance.post("/contacts", data);
  return response.data;
};

export const deleteContactApi = async (id) => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};
