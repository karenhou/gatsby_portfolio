import React from 'react'
import moment from 'moment'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import './resume.css'
import { educationInfo, experienceInfo } from '../data/resumeInfo'

const Wrapper = styled.div`
  padding-top: 3em;
  background: #252222;
`

const resume = () => {
  let eduContent = educationInfo.map((edu, index) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={moment.utc(edu.graduated).format('YYYY-MM-DD')}
        iconStyle={{ background: '#ffa500', color: '#white' }}
        key={index}
      >
        <Typography
          className="vertical-timeline-element-title"
          color="primary"
          variant="h3"
        >
          {edu.school}
        </Typography>
        <Typography
          className="vertical-timeline-element-subtitle"
          variant="h4"
          color="secondary"
        >
          {edu.certificate}
          {edu.major !== '' ? ', ' + edu.major : null}
        </Typography>
        <Typography
          className="vertical-timeline-element-subtitle"
          variant="h5"
          color="textSecondary"
        >
          {edu.location}
        </Typography>
      </VerticalTimelineElement>
    )
  })
  let expContent = experienceInfo.map((exp, index) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={moment.utc(exp.to).format('YYYY-MM-DD')}
        iconStyle={{ background: '#ffa500', color: '#white' }}
        key={index}
      >
        <Typography
          className="vertical-timeline-element-title"
          color="primary"
          variant="h3"
        >
          {exp.company}
        </Typography>
        <Typography
          className="vertical-timeline-element-subtitle"
          variant="h4"
          color="secondary"
        >
          {exp.title}
        </Typography>
        <Typography
          className="vertical-timeline-element-subtitle"
          variant="h5"
          color="textSecondary"
        >
          {exp.location}
        </Typography>
        <Typography className="vertical-timeline-element-subtitle" variant="h6">
          Skills: {exp.skills.join(', ')}
        </Typography>
      </VerticalTimelineElement>
    )
  })
  return (
    <Wrapper id="experience">
      <Typography variant="h2" style={{ textAlign: 'center' }} color="primary">
        Experience
      </Typography>
      <VerticalTimeline>
        {expContent}
        {eduContent}
      </VerticalTimeline>
    </Wrapper>
  )
}
export default resume
