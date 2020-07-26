import React, { useState } from 'react'
import { Typography, Divider } from '@material-ui/core'
import { Link } from 'gatsby'
import Sidebar from 'react-sidebar'
import Logo from '../logo.png'

const Sidedrawer = () => {
  const [sideBar, setSideBar] = useState(false)
  return (
    <div style={{ textAlign: 'center' }}>
      <Sidebar
        sidebar={
          <div
            style={{
              textAlign: 'left',
            }}
          >
            <Typography
              component={Link}
              to="/"
              variant="h4"
              style={{
                marginTop: '0.2em',
                marginBottom: '0.1em',
                marginLeft: '0.2em',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Home
            </Typography>
            <Divider style={{ backgroundColor: 'white' }} />
            <Typography
              component={Link}
              to="/#projects"
              variant="h4"
              style={{
                marginTop: '0.2em',
                marginBottom: '0.1em',
                marginLeft: '0.2em',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Projects
            </Typography>
            <Divider style={{ backgroundColor: 'white' }} />
            <Typography
              component={Link}
              to="/#experience"
              variant="h4"
              style={{
                marginTop: '0.2em',
                marginBottom: '0.1em',
                marginLeft: '0.2em',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Experience
            </Typography>
            <Divider style={{ backgroundColor: 'white' }} />
            <Typography
              component={Link}
              to="/#mytools"
              variant="h4"
              style={{
                marginTop: '0.2em',
                marginBottom: '0.1em',
                marginLeft: '0.2em',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Tools
            </Typography>
            <Divider style={{ backgroundColor: 'white' }} />
          </div>
        }
        open={sideBar}
        onSetOpen={setSideBar}
        styles={{
          sidebar: {
            background: 'orange',
            width: '250px',
          },
        }}
      >
        <Typography
          variant="h3"
          onClick={() => setSideBar(true)}
          style={{
            marginTop: '0.5em',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          <img
            style={{ marginTop: '12px', height: '80px', width: '80px' }}
            src={Logo}
            alt="logo"
          />
        </Typography>
      </Sidebar>
    </div>
  )
}

export default Sidedrawer
