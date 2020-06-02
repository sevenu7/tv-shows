import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchShow = (id) => {
  return axios.get(`${BASE_URL}/shows/${id}`);
};

export const fetchAllShows = () => {
  return axios.get(`${BASE_URL}/shows`);
};

export const searchShows = (value) => {
  return axios.get(`${BASE_URL}/search/shows?q=${value}`);
};
