import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getMenu = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/pizzas`);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};

export const getPizzaById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/order/${id}`);
    return res.data;
  } catch (err) {
    alert(err.message);
  }
};

