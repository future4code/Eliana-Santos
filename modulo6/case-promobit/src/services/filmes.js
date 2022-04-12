import axios from "axios";
import { BASE_URL } from "../constants/url";

export const getGenres = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=5769528853ac98398327afcd8c85d277&language=pt-PT`
    );
    return res.data;
  } catch (error) {
    alert(error.message);
  }
};
