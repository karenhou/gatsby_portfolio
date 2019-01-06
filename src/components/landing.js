import React, { Component } from 'react'
import styled from 'styled-components'
import Container from './container'
import Typography from '@material-ui/core/Typography'
import { Spring, config } from 'react-spring'
import Typist from 'react-typist'
import { auto } from 'async'

const ViewHeight = styled.div`
  padding-top: 11em;
  text-align: center;
`

const Background = styled.div`
  background: #252222;
  height: 91vh;
`

const Wrapper = styled.div`
  margin-top: 2em;
`

export default class landing extends Component {
  render() {
    return (
      <Background>
        <Container>
          <ViewHeight>
            <Spring
              id="home"
              config={config.slow}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            >
              {props => (
                <Typography variant="h1" style={props} color="primary">
                  Hello!
                </Typography>
              )}
            </Spring>
            <Wrapper>
              <Typist cursor={{ hideWhenDone: true }}>
                <Typography
                  variant="h1"
                  color="primary"
                  style={{
                    display: 'inline',
                    color: 'white',
                  }}
                  gutterBottom={true}
                >
                  I've developed
                </Typography>
                <br />
                <Typography
                  variant="h1"
                  color="primary"
                  gutterBottom={true}
                  style={{ display: 'inline', margin: auto }}
                >
                  websites
                </Typography>
                <Typist.Backspace count={8} delay={200} />
                <Typography
                  variant="h1"
                  color="primary"
                  style={{ display: 'inline' }}
                >
                  products
                </Typography>
                <Typist.Backspace count={8} delay={200} />
                <Typography
                  variant="h1"
                  color="primary"
                  style={{ display: 'inline' }}
                  gutterBottom={true}
                >
                  fears for human interactions
                </Typography>
                <Typist.Backspace count={28} delay={100} />
                <Typography
                  variant="h1"
                  color="primary"
                  style={{ display: 'inline' }}
                  gutterBottom={true}
                >
                  passion for creativity
                </Typography>
              </Typist>
            </Wrapper>
          </ViewHeight>
        </Container>
      </Background>
    )
  }
}
