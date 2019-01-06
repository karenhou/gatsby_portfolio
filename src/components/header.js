import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  grow: {
    flexGrow: 1,
  },
  btn: {
    borderRadius: 0,
    marginRight: '3em',
    '&:hover': {
      color: 'orange',
      borderBottom: 'solid 1px orange',
    },
  },
}

const Header = ({ siteTitle, classes }) => (
  <>
    <AppBar position="static" color="secondary">
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {siteTitle}
        </Typography>
        <Button color="inherit" component={Link} to="/" className={classes.btn}>
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
      </Toolbar>
    </AppBar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
