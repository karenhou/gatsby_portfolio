import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Work from '../components/work'
import Resume from '../components/resume'
import MyTools from '../components/mytools'
import withRoot from '../withRoot'
import Container from '../components/container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Container>
      <Work />
      <Resume />
      <MyTools />
    </Container>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default withRoot(IndexPage)
