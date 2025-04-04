import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': 'live_NsNbnTImR3ZIEB15nSORkFw0bFEvhCwJ4SFAINW3gAR7ZTmtkiFCpC6TjrJHtIim'
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)
