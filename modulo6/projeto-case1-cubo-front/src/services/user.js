import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const getAll = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/users`);
        return res.data;
    } catch (err) {
        alert(err.message);
    }
}

export const create = async (body) => {
    try {
        return await axios.post(`${BASE_URL}/users`, body);
    } catch (err) {
        alert(err.message);
    }
}