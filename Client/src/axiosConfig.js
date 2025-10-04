import axios from 'axios' 
export const axiosBase = axios.create({
    baseURL:'hppt://localhost:3000/api'
})