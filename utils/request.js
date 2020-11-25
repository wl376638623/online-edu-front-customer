import axios from 'axios'
//创建axios

const service = axios.create({
  baseURL:'http://localhost:9001',
  timeout:2000
})
export default service
