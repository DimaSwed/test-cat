import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': process.env.CAT_API_KEY
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)
