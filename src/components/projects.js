import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from './container'
import { Transition } from 'react-spring'
import { Chip, Grid, Typography, Paper } from '@material-ui/core'
import { StaticQuery, graphql } from 'gatsby'

const mystyles = theme => ({
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  wrapper: {
    marginBottom: theme.spacing(5),
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  paper: {
    background: '#252222',
    padding: '2.5em',
    maxHeight: '500px',
  },
  btn: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(4),
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
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    background: 'orange',
  },
})

class Projects extends Component {
  state = {
    index: 0,
    from: '',
    leave: '',
  }

  onClickLeft = len => {
    this.setState({
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    if (this.state.index === len - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }

  onClickRight = len => {
    this.setState({
      from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })
    if (this.state.index === 0) {
      this.setState({ index: len - 1 })
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    const { classes } = this.props
    const { index, from, leave } = this.state

    return (
      <StaticQuery
        query={graphql`
          query {
            github {
              repositoryOwner(login: "karenhou") {
                pinnedRepositories(first: 6) {
                  nodes {
                    name
                    description
                    url
                    homepageUrl
                    repositoryTopics(first: 5) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { nodes } = data.github.repositoryOwner.pinnedRepositories
          return (
            <Container id="projects">
              <div className={classes.wrapper}>
                <Typography
                  id="projects"
                  variant="h2"
                  align="center"
                  className={classes.title}
                >
                  Projects
                </Typography>
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    onClick={() => this.onClickLeft(nodes.length)}
                    style={{ textAlign: 'center' }}
                  >
                    <i
                      className="fas fa-angle-left"
                      style={{ margin: '1em' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={10} md={8}>
                    <Transition
                      key={index}
                      from={from}
                      enter={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      leave={leave}
                    >
                      {styles => styles => {
                        return (
                          <Paper
                            style={{ ...styles, height: '100%' }}
                            className={classes.paper}
                          >
                            <Grid item>
                              <Typography
                                variant="h3"
                                style={{ marginBottom: '0.2em' }}
                              >
                                <a
                                  className={classes.link}
                                  href={nodes[index].url}
                                >
                                  {nodes[index].name}
                                </a>{' '}
                              </Typography>
                              <Typography
                                variant="h5"
                                color="primary"
                                style={{ color: 'white' }}
                              >
                                {nodes[index].description}
                              </Typography>
                            </Grid>
                            <Grid item>
                              {nodes[index].repositoryTopics.nodes.map(
                                (d, i) => {
                                  return (
                                    <Chip
                                      key={i}
                                      label={d.topic.name}
                                      className={classes.chip}
                                    />
                                  )
                                },
                              )}
                            </Grid>
                          </Paper>
                        )
                      }}
                    </Transition>
                  </Grid>
                  <Grid
                    item
                    onClick={() => this.onClickRight(nodes.length)}
                    style={{ textAlign: 'center' }}
                  >
                    <i
                      className="fas fa-angle-right"
                      style={{ margin: '1em' }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Container>
          )
        }}
      />
    )
  }
}

export default withStyles(mystyles)(Projects)
