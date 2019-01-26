import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: black;
`

export default ({ children }) => <Container>{children}</Container>
