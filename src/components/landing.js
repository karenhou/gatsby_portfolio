import React, { Component } from 'react'
import styled from 'styled-components'
import Container from './container'
import Typography from '@material-ui/core/Typography'
import { Spring, config } from 'react-spring'
import Typist from 'react-typist'

const ViewHeight = styled.div`
  height: 100vh;
  @media only screen and (min-width: 627px) {
    padding-top: 6em;
    text-align: center;
  }
  @media only screen and (min-width: 401px) and (max-width: 626px) {
    padding-top: 8em;
    text-align: left;
    h1 {
      font-size: 60px;
    }
  }
  @media only screen and (max-width: 400px) {
    padding-top: 5em;
    text-align: left;
    height: 80vh;
    h1 {
      text-align: left;
      font-size: 60px;
    }
  }
`

const Background = styled.div`
  max-width: 1440px;
  background: #252222;
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
                <Typography
                  variant="h1"
                  style={props}
                  color="primary"
                  gutterBottom={true}
                >
                  Hello!
                </Typography>
              )}
            </Spring>
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
                style={{ display: 'inline' }}
              >
                websites
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
              <Typist.Backspace count={28} delay={200} />
              <Typography
                variant="h1"
                color="primary"
                style={{ display: 'inline' }}
                gutterBottom={true}
              >
                passion for creativity
              </Typography>
              <Typist.Backspace count={36} delay={200} />
              <Typography
                variant="h1"
                style={{ display: 'inline', color: 'white' }}
                gutterBottom={true}
              >
                I'm Karen Hou
              </Typography>
            </Typist>
          </ViewHeight>
        </Container>
      </Background>
    )
  }
}
