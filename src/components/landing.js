import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import Container from './container'
import Typography from '@material-ui/core/Typography'

const ViewHeight = styled.div`
  /* height: 100vh; */
  font-size: 30px;
  padding-top: 5em;
  color: white;
`

const Background = styled.div`
  background-image: url('https://source.unsplash.com/Ye6rupMjAWk/1600x800');
  height: 100vh;
`
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`
const blinkingCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange }
`

const Typewrite = styled.h1`
  font-family: monospace;
  letter-spacing: 0.15em;
  margin: 1em auto;
  overflow: auto;
  overflow-x: hidden;
  white-space: nowrap;
  text-align: center;
  border-right: 0.15em solid orange;
  animation: ${typing} 3.5s steps(40, end),
    ${blinkingCursor} 0.5s step-end infinite;
`

const landing = () => {
  return (
    <Background>
      <Container>
        <ViewHeight>
          <Typography id="home" variant="h2" color="secondary">
            Hello!
          </Typography>
          <Typewrite>My name is Karen</Typewrite>
        </ViewHeight>
      </Container>
    </Background>
  )
}
export default landing
