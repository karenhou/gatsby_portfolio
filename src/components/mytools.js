import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Lightbox from './lightbox'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Container from './container'

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
        <Container>
          <Typography
            variant="h2"
            style={{ textAlign: 'center', marginBottom: '0.6em' }}
            id="mytools"
          >
            My Tools
          </Typography>
          <Grid container spacing={24} alignItems="center" justify="center">
            <Lightbox logoImages={data.logoImages.edges} />
          </Grid>
        </Container>
      )
    }}
  />
)
