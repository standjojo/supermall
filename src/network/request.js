import axios from 'axios'

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // baseURL: 'http://152.136.185.210:8000/api/w6',
      baseURL: 'http://192.168.16.127:3000',
      // baseURL: 'https://9e42dql8.dongtaiyuming.net/',
     timeout: 5000
    })

    instance.interceptors.request.use(data => {
      return data
    }, err => {
    })

    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
    })

    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}