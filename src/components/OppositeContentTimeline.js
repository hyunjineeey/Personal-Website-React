import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import Link from '@mui/material/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OppositeContentTimeline () {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Oct 2021 - Dec 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined' color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://sentera.com/' underline='none' target='_blank' rel='noreferrer'>Sentera</Link>
          <br />Frontend Engineer
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Graduated Dec 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'>
            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://cse.umn.edu/college/computer-science' underline='none' target='_blank' rel='noreferrer'>University of Minnesota</Link>
          <br />Bachelor of Science in Computer Science
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Completed Oct 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='success'>
            <FontAwesomeIcon icon="fa-brands fa-free-code-camp" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://www.udemy.com/course/modern-react-bootcamp/' underline='none' target='_blank' rel='noreferrer'>Udemy</Link>
          <br />The Modern React Bootcamp
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          May - Aug 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://www.smartthings.com/' underline='none' target='_blank' rel='noreferrer'>SmartThings</Link>
          <br />Software Engineer Intern
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Nov 2019 - May 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://flywheel.io/' underline='none' target='_blank' rel='noreferrer'>Flywheel</Link>
          <br />Software Engineer Intern
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          May - Dec 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://twin-cities.umn.edu/' underline='none' target='_blank' rel='noreferrer'>University of Minnesota</Link>
          <br />Student Web Support
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Completed July 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='success'>
            <FontAwesomeIcon icon="fa-brands fa-free-code-camp" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://www.udemy.com/course/the-web-developer-bootcamp/' underline='none' target='_blank' rel='noreferrer'>Udemy</Link>
          <br />The Web Developer Bootcamp
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Feb - Jun 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href='https://www.childrenstorytime.co/' underline='none' target='_blank' rel='noreferrer'>Children Story Time</Link>
          <br />Frontend Engineer Intern
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
