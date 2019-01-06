import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MediaQuery from 'react-responsive'

const styles = {
  grow: {
    flexGrow: 1,
  },
  btn: {
    fontSize: 'x-large',
    borderRadius: 0,
    marginRight: '2em',
    '&:hover': {
      color: 'orange',
      borderBottom: 'solid 1px orange',
    },
  },
}

const Header = ({ siteTitle, classes }) => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar variant="regular">
          <MediaQuery query="(min-width: 820px)">
            <Typography variant="h4" color="inherit" className={classes.grow}>
              {siteTitle}
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to="/"
              className={classes.btn}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#work"
              className={classes.btn}
            >
              Work
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#resume"
              className={classes.btn}
            >
              Experience
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#mytools"
              className={classes.btn}
            >
              Tools
            </Button>
          </MediaQuery>
        </Toolbar>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
