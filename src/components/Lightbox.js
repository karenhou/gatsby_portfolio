import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

export default class Lightbox extends Component {
  static propTypes = {
    logoImages: PropTypes.array.isRequired,
  }

  render() {
    const { logoImages } = this.props

    return logoImages.map((image, index) => (
      <Grid item xs={12} md={6} lg={4} key={index}>
        <Img
          key={image.node.childImageSharp.fluid.src}
          fluid={image.node.childImageSharp.fluid}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          }}
        />
      </Grid>
    ))
  }
}
