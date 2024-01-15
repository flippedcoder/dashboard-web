import axios from 'axios'

const AUTH_TOKEN = localStorage.getItem('auth')

axios.defaults.baseURL = import.meta.env.API_URL

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'
