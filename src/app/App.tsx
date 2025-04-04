import { Suspense, useState } from 'react'
import { useCatImage } from '@/features/cat/lib/hooks'
import { CatCard } from '@/features/cat/ui/CatCard'
import { RefreshButton } from '@/features/cat/ui/RefreshButton'
import { StyledLayout, StyledContainer, StyledSuspenseContainer } from './styles/app-styles'

function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false)

  const {
    data: cat,
    isLoading,
    isError,
    isFetching,
    refetch
  } = useCatImage(autoRefresh && isEnabled ? 5000 : undefined)

  const toggleEnabled = () => {
    const newEnabled = !isEnabled
    setIsEnabled(newEnabled)

    if (!newEnabled) {
      setAutoRefresh(false)
    }
  }
  const toggleAutoRefresh = () => {
    setAutoRefresh((prev) => !prev)
  }

  const handleGetCat = () => {
    refetch()
  }

  return (
    <StyledLayout>
      <StyledContainer>
        <RefreshButton
          isEnabled={isEnabled}
          toggleEnabled={toggleEnabled}
          autoRefresh={autoRefresh}
          toggleAutoRefresh={toggleAutoRefresh}
          onGetCat={handleGetCat}
        />

        <Suspense fallback={<StyledSuspenseContainer>🐱 Loading cat...</StyledSuspenseContainer>}>
          <CatCard cat={cat} isLoading={isLoading} isError={isError} isFetching={isFetching} />
        </Suspense>
      </StyledContainer>
    </StyledLayout>
  )
}

export default App
