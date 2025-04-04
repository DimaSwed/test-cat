import { useState } from 'react'
import { useCatImage } from '@/features/cat/lib/hooks'
import { CatCard } from '@/features/cat/ui/CatCard'
import styled from 'styled-components'

const StyledLayout = styled.div`
  min-height: 100vh;
  border: 1px solid red;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function App() {
  const [isEnabled, setIsEnabled] = useState(true)
  const { data: cat, isLoading, isError } = useCatImage(isEnabled, isEnabled ? 5000 : undefined)

  return (
    <StyledLayout>
      <CatCard cat={cat} isLoading={isLoading} isError={isError} />
    </StyledLayout>
  )
}

export default App
