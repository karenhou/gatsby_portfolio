import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Lightbox from './lightbox'
import { Typography, Grid, Container } from '@material-ui/core'
import MyContainer from './container'

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
        <MyContainer>
          <Container maxWidth="lg" style={{ marginBottom: '3.5rem' }}>
            <Typography
              variant="h2"
              style={{
                textAlign: 'center',
                marginBottom: '0.6em',
                marginTop: '3.5rem',
              }}
              id="mytools"
            >
              My Tools
            </Typography>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Lightbox logoImages={data.logoImages.edges} />
            </Grid>
          </Container>
        </MyContainer>
      )
    }}
  />
)
