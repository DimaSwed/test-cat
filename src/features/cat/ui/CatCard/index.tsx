import styles from './styles.module.sass'
import { CatImage } from '@/features/cat/types/types'

interface ICatCardProps {
  cat?: CatImage
  isLoading: boolean
  isError: boolean
}

export const CatCard = ({ cat, isLoading, isError }: ICatCardProps) => {
  if (isLoading) return <div className={styles.card}>Loading cat...</div>
  if (isError) return <div className={styles.card}>Error fetching cat</div>

  return (
    <div className={styles.card}>
      {cat && (
        <img
          src={cat.url}
          alt="Random cat"
          className={styles.image}
          width={cat.width}
          height={cat.height}
        />
      )}
    </div>
  )
}
