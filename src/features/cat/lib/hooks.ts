import { useSuspenseQuery } from '@tanstack/react-query'
import { catApi } from '@/features/cat/api/api-cat'
import { CatImage } from '@/features/cat/types/types'

export const useCatImage = (refetchInterval?: number) => {
  return useSuspenseQuery<CatImage>({
    queryKey: ['cat'],
    queryFn: () => catApi.getRandomCat(),
    refetchInterval,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  })
}
