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

const year = new Date().getFullYear()

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
            © {year}, Built with{' '}
            <FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink>
            <br />
            <FooterLink href="#home">Back to Top</FooterLink>
            <p style={{ marginBottom: 0 }}>Find me @ following</p>
            <div style={{ marginTop: '0.2em' }}>
              <FooterLink
                href="https://github.com/karenhou"
                aria-label="Github"
              >
                <i className="fab fa-github" style={{ marginRight: '1em' }} />
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/khou"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" style={{ marginRight: '1em' }} />
              </FooterLink>
              <FooterLink href="mailto:ymcl760728@gmail.com" aria-label="Email">
                <i className="fas fa-envelope" />
              </FooterLink>
            </div>
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
