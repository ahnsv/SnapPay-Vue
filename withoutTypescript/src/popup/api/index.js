import axios from 'axios'
import { dev } from './config'
export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
