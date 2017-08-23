import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:80';

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const requestLogin = params => { return axios.post('/user/login', params).then(res => res.data) }
    //let config = { headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' } }
    //export const requestLogin = params => { return axios.post('/user/login', params, config).then(res => res.data) }