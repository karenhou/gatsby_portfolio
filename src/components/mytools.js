import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Lightbox from './lightbox'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const Container = styled.div`
  height: 100vh;
  color: black;
`
const Temp = ({ data }) => {
  return data.allFile.edges.map((file, index) => {
    return <div key={index}>{file.node.name}</div>
  })
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        logoImages: allFile(
          filter: { extension: { eq: "png" } }
          sort: { order: ASC, fields: name }
        ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Typography
            variant="h2"
            style={{ textAlign: 'center', marginBottom: '0.6em' }}
          >
            My Tools
          </Typography>
          <Grid container spacing={24} alignItems="center" justify="center">
            <Lightbox logoImages={data.logoImages.edges} />
          </Grid>
        </>
      )
    }}
  />
)
