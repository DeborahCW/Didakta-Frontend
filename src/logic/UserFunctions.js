import axios from 'axios'


export const register = user => {
    return axios.post('http://localhost:4000/register',{
    first : user.first,
    last : user.last,
    userName : user.userName,
    email : user.email,
    password : user.password
})
    .then(res => console.log('Registered'))
    .catch(err => console.log(err))
}

export const login = user => {
    return axios.post('http://localhost:4000/login', {
        email : user.email,
        password : user.password
    })
    .then(res => {

        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => console.error(err))
}

