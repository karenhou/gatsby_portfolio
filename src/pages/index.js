import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Projects from '../components/projects'
import Resume from '../components/resume'
import MyTools from '../components/mytools'
import withRoot from '../withRoot'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Karen Hou's portfoilo"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `portfolio`,
        `githubAPI`,
        `karen hou`,
        `karen`,
        `hou`,
      ]}
    />
    <Landing />
    <Projects />
    <Resume />
    <MyTools />
  </Layout>
)

export default withRoot(IndexPage)
