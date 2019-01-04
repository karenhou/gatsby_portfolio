import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import styled from 'styled-components'
// import './layout.css'

const Footer = styled.footer`
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 2rem;
  text-align: center;
  background-color: gray;
`
const Layout = ({ children }) => (
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
        {children}
        <Footer>
          © 2018, Built with{' '}
          <a href="https://www.gatsbyjs.org" style={{ color: 'blue' }}>
            Gatsby
          </a>
        </Footer>
        {/* </Container> */}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
