import React from 'react'
import moment from 'moment'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 3em;
`

const resume = () => {
  return (
    <Wrapper id="resume">
      <Typography variant="h2" style={{ textAlign: 'center' }}>
        Resume Page
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={moment.utc('20150128').format('YYYY-MM-DD')}
          iconStyle={{ background: '#80cbc4', color: '#00796b' }}
        >
          <Typography
            className="vertical-timeline-element-title"
            color="primary"
            variant="h5"
          >
            test1
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
            color="secondary"
          >
            test2
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
          >
            {/* <i className="fas fa-hotel" style={{ marginRight: '5px' }} /> */}
            test3
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
          >
            test4
          </Typography>
          <Button
            // component={Link}
            // to={`/trips/${trip._id}/${day._id}/details`}
            fullWidth
            variant="contained"
            color="primary"
          >
            Details...
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={moment.utc('20150129').format('YYYY-MM-DD')}
          iconStyle={{ background: '#80cbc4', color: '#00796b' }}
        >
          <Typography
            className="vertical-timeline-element-title"
            color="primary"
            variant="h5"
          >
            test1
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
            color="secondary"
          >
            test2
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
          >
            {/* <i className="fas fa-hotel" style={{ marginRight: '5px' }} /> */}
            test3
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
          >
            test4
          </Typography>
          <Button
            // component={Link}
            // to={`/trips/${trip._id}/${day._id}/details`}
            fullWidth
            variant="contained"
            color="primary"
          >
            Details...
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={moment.utc('20150201').format('YYYY-MM-DD')}
          iconStyle={{ background: '#80cbc4', color: '#00796b' }}
        >
          <Typography
            className="vertical-timeline-element-title"
            color="primary"
            variant="h5"
          >
            test1
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
            color="secondary"
          >
            test2
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
          >
            {/* <i className="fas fa-hotel" style={{ marginRight: '5px' }} /> */}
            test3
          </Typography>
          <Typography
            className="vertical-timeline-element-subtitle"
            variant="subtitle1"
          >
            test4
          </Typography>
          <Button
            // component={Link}
            // to={`/trips/${trip._id}/${day._id}/details`}
            fullWidth
            variant="contained"
            color="primary"
          >
            Details...
          </Button>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Wrapper>
  )
}
export default resume
