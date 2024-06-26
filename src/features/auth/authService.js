import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getTokenFromLocalStorage = localStorage.getItem("user") ? 
    JSON.parse(localStorage.getItem("user")) : null 

const logToken = (JSON.parse(localStorage.getItem("user")) !== undefined)

const config = {
    headers : {
        Authorization: `Bearer ${logToken.token}`, 
        accept: 'application/json'
    }
}

const login = async (userData) => {
    const response = await axios.post(`${base_url}users/login`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data
}

const logout = async () => {
    const response = await axios.get(`${base_url}users/logout`)
    
    localStorage.removeItem('user')
    
    return response.data
}
// const getOrders = async () => {
//     const response = await axios.get(`${base_url}user/get-allOrders`, config)

//     return response.data
// }

const authService = { 
    login,
    logout
}

export default authService