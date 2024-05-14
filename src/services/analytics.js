import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:3333' })

const getUsers = async () => {
    const response = await api.get('/users')
    return response
}

const registerUser = async (user) => {
    const response = await api.post('/users', user)
    console.log(response)
    return response.data
}

const loginUser = async (user) => {
    const response = await api.post('/login', user)
    return response
}

const buscaToken = async (token) => {
    const response  = await api.get('/dashboard', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response
}

const logoutUser = async (token) => {
    const response  = await api.post('/logout', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response
}

export {
    registerUser,
    loginUser,
    buscaToken,
    logoutUser,
    getUsers
}