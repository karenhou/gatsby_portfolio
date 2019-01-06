import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Work from '../components/work'
import Resume from '../components/resume'
import MyTools from '../components/mytools'
import withRoot from '../withRoot'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Work />
    <Resume />
    <MyTools />
  </Layout>
)

export default withRoot(IndexPage)
