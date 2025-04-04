import { useSuspenseQuery } from '@tanstack/react-query'
import { catApi } from '@/features/cat/api/api-cat'
import { CatImage } from '@/features/cat/types/types'

export const useCatImage = (enabled: boolean, refetchInterval?: number) => {
  return useSuspenseQuery<CatImage>({
    queryKey: ['cat'],
    queryFn: () => catApi.getRandomCat()
    // enabled,
    // refetchInterval
  })
}
