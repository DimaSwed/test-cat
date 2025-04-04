import styled from 'styled-components'

export const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const StyledContainer = styled.div`
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

export const StyledSuspenseContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
`
