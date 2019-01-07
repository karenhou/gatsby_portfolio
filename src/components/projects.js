import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Container from './container'
import Typography from '@material-ui/core/Typography'
import { Transition } from 'react-spring'
import Grid from '@material-ui/core/Grid'
import { projectInfo } from '../data/projectInfo'
import Chip from '@material-ui/core/Chip'

const mystyles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  wrapper: {
    marginBottom: theme.spacing.unit * 5,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  paper: {
    background: '#252222',
    padding: '2.5em',
    maxHeight: '400px',
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
  chip: {
    fontSize: '20px',
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    background: 'orange',
  },
})

class Projects extends Component {
  state = {
    index: 0,
    from: '',
    leave: '',
  }

  onClickLeft = () => {
    this.setState({
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    if (this.state.index === projectInfo.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }

  onClickRight = () => {
    this.setState({
      from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })
    if (this.state.index === 0) {
      this.setState({ index: projectInfo.length - 1 })
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    const { classes } = this.props
    const { index, from, leave } = this.state
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
          <Grid container spacing={24} justify="center" alignItems="center">
            <Grid
              item
              lg={2}
              onClick={this.onClickLeft}
              style={{ textAlign: 'center' }}
            >
              <i className="fas fa-angle-left" />
            </Grid>
            <Grid item lg={8}>
              <Transition
                key={index}
                from={from}
                enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                leave={leave}
              >
                {styles => styles => {
                  return (
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
                            <Chip
                              key={i}
                              label={tool}
                              className={classes.chip}
                            />
                          )
                        })}
                      </Grid>
                    </Paper>
                  )
                }}
              </Transition>
            </Grid>
            <Grid
              item
              onClick={this.onClickRight}
              lg={2}
              style={{ textAlign: 'center' }}
            >
              <i className="fas fa-angle-right" />
            </Grid>
          </Grid>
        </div>
      </Container>
    )
  }
}

export default withStyles(mystyles)(Projects)
