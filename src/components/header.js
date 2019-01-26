import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../logo.png'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
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
  img: {
    marginTop: '12px',
    height: '60px',
    width: '60px',
    flexGrow: 1,
  },
}

const Header = ({ siteTitle, classes }) => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="regular">
        <MediaQuery query="(min-width: 820px)">
          <Link to="/" style={{ flexGrow: 1 }}>
            <img className={classes.img} src={Logo} alt={siteTitle} />
          </Link>
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
            to="#projects"
            className={classes.btn}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="#experience"
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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
