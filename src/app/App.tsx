import { Suspense, useState } from 'react'
import { useCatImage } from '@/features/cat/lib/hooks'
import { CatCard } from '@/features/cat/ui/CatCard'
import { RefreshButton } from '@/features/cat/ui/RefreshButton'
import styled from 'styled-components'

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StyledContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 500px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`

const StyledSuspenseContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
`

function App() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(false)
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
