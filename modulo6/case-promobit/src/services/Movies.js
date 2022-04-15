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
export const getMovieById = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=5769528853ac98398327afcd8c85d277&language=pt-PT`
    );
    return res.data;
  } catch (error) {
    alert(error.message);
  }
};

export const getMovie = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/popular?api_key=5769528853ac98398327afcd8c85d277&language=pt-PT`
    );
    return res.data;
  } catch (error) {
    alert(error.message);
  }
};
export const getRecommendations = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}/recommendations?api_key=5769528853ac98398327afcd8c85d277&language=pt-PT`
    );
    return res.data;
  } catch (error) {
    alert(error.message);
  }
};
export const getCredits = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=5769528853ac98398327afcd8c85d277&language=pt-PT`
    );
    return res.data;
  } catch (error) {
    alert(error.message);
  }
};
