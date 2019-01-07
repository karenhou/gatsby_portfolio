import React from 'react'
import Header from './header'
import MediaQuery from 'react-responsive'
import SideDrawer from './sidedrawer'

export default ({ data }) => {
  return (
    <MediaQuery query="(min-device-width: 300px)">
      <Header siteTitle={data.site.siteMetadata.title} />
      <MediaQuery query="(max-width: 819px)">
        <SideDrawer />
      </MediaQuery>
    </MediaQuery>
  )
}
