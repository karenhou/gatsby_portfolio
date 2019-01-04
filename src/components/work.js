import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  mypaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '25em',
  },
  media: {
    height: '140px',
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
  title: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 5,
  },
})

const ViewHeight = styled.div`
  /* height: 100vh; */
  text-align: center;
  flex-grow: 1;
`

const work = ({ classes }) => {
  return (
    <ViewHeight id="work">
      <Typography variant="h2" className={classes.title}>
        Work Page
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.mypaper}>Work one</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.mypaper}>Work one</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.mypaper}>Work one</Paper>
        </Grid>
      </Grid>
    </ViewHeight>
  )
}
export default withStyles(styles)(work)
