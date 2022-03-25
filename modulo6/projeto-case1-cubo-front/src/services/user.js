import axios from 'axios'
import { BASE_URL } from '../constants/url'

export const createUser = (body)=>{
    return axios.post(`${BASE_URL}/create`,body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
     
    })
    .catch((err) => {
        alert(err.message)
    });
}
export const getAllUser = ()=>{
    return axios.get(`${BASE_URL}/all`)
    .then((res) => {
        //localStorage.setItem("token", res.data.token)
     
    })
    .catch((err) => {
        alert(err.message)
    });
}