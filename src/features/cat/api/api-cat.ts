import { apiClient } from '@/shared/api/apiClient'

export const catApi = {
  getRandomCat: async () => {
    const response = await apiClient.get('/images/search')
    return response.data[0]
  }
}
