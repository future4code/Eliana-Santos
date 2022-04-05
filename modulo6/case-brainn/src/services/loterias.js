import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getLoterias = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/loterias`);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};

export const getConcursos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/loterias-concursos`);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};

export const getConcursosById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/concursos/${id}`);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};
