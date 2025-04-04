import { useEffect, useState } from 'react'
import styles from './styles.module.sass'
import { CatImage } from '@/features/cat/types/types'
import clsx from 'clsx'

interface ICatCardProps {
  cat?: CatImage
  isLoading: boolean
  isError: boolean
  isFetching: boolean
}

export const CatCard = ({ cat, isLoading, isError, isFetching }: ICatCardProps) => {
  const [displayedCat, setDisplayedCat] = useState<CatImage | null>(cat || null)
  const [fade, setFade] = useState<boolean>(false)

  useEffect(() => {
    if (cat?.url !== displayedCat?.url) {
      setFade(true)

      const timeout = setTimeout(() => {
        setDisplayedCat(cat || null)
        setFade(false)
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [cat, displayedCat])

  if (isLoading) return <div className={styles.card}>🐱 Loading cat...</div>
  if (isError) return <div className={styles.card}>❌ Error fetching cat</div>

  return (
    <div className={clsx(styles.card, isFetching && styles.loading)}>
      {displayedCat && (
        <img
          key={displayedCat.url}
          src={displayedCat.url}
          alt="Random cat"
          className={clsx(styles.image, fade && styles.fadeOut)}
        />
      )}
      {isFetching && (
        <div className={styles.overlay}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  )
}
