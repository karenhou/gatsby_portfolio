import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Container from './container'
import Typography from '@material-ui/core/Typography'
import { Transition } from 'react-spring'
import Grid from '@material-ui/core/Grid'
import { projectInfo } from '../data/projectInfo'
import { Button } from '@material-ui/core'

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  wrapper: {
    marginBottom: theme.spacing.unit * 5,
  },
  paper: {
    cursor: 'pointer',
    background: '#252222',
    padding: '2.5em',
  },
  btn: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 4,
  },
  link: {
    textDecoration: 'none',
    color: 'orange',
    '&:hover': {
      color: 'white',
    },
  },
})

class work extends Component {
  state = {
    index: 0,
  }

  onClick = () => {
    if (this.state.index === projectInfo.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }

  render() {
    const { classes } = this.props
    const { index } = this.state
    return (
      <Container>
        <div className={classes.wrapper}>
          <Typography
            id="projects"
            variant="h2"
            align="center"
            className={classes.title}
          >
            Projects
          </Typography>
          <div onClick={this.onClick}>
            <Transition
              key={index}
              from={{ opacity: 0, transform: 'translate3d(0,100%,0)' }}
              enter={{ opacity: 1, transform: 'translate3d(0,0%,0)' }}
              leave={{ opacity: 0, transform: 'translate3d(0,-50%,0)' }}
            >
              {styles => styles => {
                return (
                  <Grid container spacing={24} className={classes.grid}>
                    <Paper style={{ ...styles }} className={classes.paper}>
                      <Grid item>
                        <Typography variant="h3">
                          <a
                            className={classes.link}
                            href={projectInfo[index].links}
                          >
                            {projectInfo[index].name}
                          </a>{' '}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="primary"
                          style={{ color: 'white' }}
                        >
                          {projectInfo[index].deployed}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" style={{ color: 'gray' }}>
                          {projectInfo[index].description}
                        </Typography>
                      </Grid>
                      <Grid item>
                        {projectInfo[index].tools.map((tool, i) => {
                          return (
                            <Button
                              key={i}
                              variant="contained"
                              color="primary"
                              className={classes.btn}
                            >
                              {tool}
                            </Button>
                          )
                        })}
                      </Grid>
                    </Paper>
                  </Grid>
                )
              }}
            </Transition>
          </div>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(work)
