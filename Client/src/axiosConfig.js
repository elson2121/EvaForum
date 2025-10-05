import axios from 'axios' 
 const axiosBase = axios.create({
    baseURL:'http://localhost:3000/api/users'
})

export default axiosBase; 