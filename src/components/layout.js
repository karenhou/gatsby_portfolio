import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import styled from 'styled-components'
import Sidebar from 'react-sidebar'
import Typography from '@material-ui/core/Typography'
import MediaQuery from 'react-responsive'
import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider'

const Footer = styled.footer`
  font-size: large;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 2rem;
  text-align: center;
  background-color: #252222;
  color: white;
`

const Layout = ({ children }) => {
  const [sideBar, setSideBar] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MediaQuery query="(max-width: 819px)">
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
                      variant="h3"
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
                    <Divider />
                    <Typography
                      component={Link}
                      to="#projects"
                      variant="h3"
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
                    <Divider />
                    <Typography
                      component={Link}
                      to="#experience"
                      variant="h3"
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
                    <Divider />
                    <Typography
                      component={Link}
                      to="#mytools"
                      variant="h3"
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
                  Karen Hou
                </Typography>
              </Sidebar>
            </div>
          </MediaQuery>
          {children}
          <Footer>
            © 2018, Built with{' '}
            <a href="https://www.gatsbyjs.org" style={{ color: 'orange' }}>
              Gatsby
            </a>
          </Footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
