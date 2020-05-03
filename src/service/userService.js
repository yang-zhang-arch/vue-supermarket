import request from '@/network/request'

const register = ({ name, telphone, password }) => {
    return request.post('auth/register', { name, telphone, password })
}

const login = ({ telphone, password }) => {
    return request.post('auth/login', { telphone, password })
}

const info = () => {
    return request.get('auth/info')
}

export default {
    register,
    info,
    login
}