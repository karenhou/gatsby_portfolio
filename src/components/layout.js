import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import HeadContainer from './headContainer'

const Footer = styled.footer`
  font-size: large;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 2rem;
  text-align: center;
  background-color: #252222;
  color: white;
`
const FooterLink = styled.a`
  color: orange;
  text-decoration: none;
`

const Layout = ({ children }) => {
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
        <>
          <HeadContainer data={data} />
          {children}
          <Footer>
            © 2018, Built with{' '}
            <FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink>
            <br />
            <FooterLink href="#home">Back to Top</FooterLink>
          </Footer>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
