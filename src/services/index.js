import axios from 'axios';
import { baseUrl } from '../constants';

export const fetchShow = (id) => {
    return axios.get(`${baseUrl}/shows/${id}`)
}

export const fetchAllShows = () => {
    return axios.get(`${baseUrl}/shows`)
}

export const searchShows = (value) => {
    return axios.get(`${baseUrl}/search/shows?q=${value}`)
}