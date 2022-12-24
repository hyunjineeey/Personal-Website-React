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

export default function ExperienceTimeline () {
  const Item = ({ date, variant, color, company, title, link, icon }) => {
    return (
      <TimelineItem>
        <TimelineOppositeContent sx={{ fontSize: '0.9rem' }}>
          {date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          {icon
            ? (
              <TimelineDot color={color}>
                <FontAwesomeIcon size='xs' icon='fa-solid fa-graduation-cap' />
              </TimelineDot>
              )
            : <TimelineDot variant={variant} color={color} />}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href={link} underline='none' target='_blank' rel='noreferrer'>{company}</Link>
          <br />{title}
        </TimelineContent>
      </TimelineItem>
    )
  }
  return (
    <Timeline sx={{ p: 0 }}>
      <Item
        date='Oct 2021 - Dec 2022'
        variant='filled'
        company='Sentera'
        title='Frontend Engineer'
        link='https://sentera.com/'
      />
      <Item
        date='Graduated Dec 2020'
        color='warning'
        company='University of Minnesota'
        title='Computer Science'
        link='https://cse.umn.edu/college/computer-science'
        icon='fa-solid fa-graduation-cap'
      />
      <Item
        date='Completed Oct 2020'
        color='success'
        company='Udemy'
        title='The Modern React Bootcamp'
        link='https://www.udemy.com/course/modern-react-bootcamp/'
        icon='fa-brands fa-free-code-camp'
      />
      <Item
        date='May - Aug 2020'
        variant='outlined'
        company='SmartThings'
        title='Software Engineer Intern'
        link='https://www.smartthings.com/'
      />
      <Item
        date='Nov 2019 - May 2020'
        variant='outlined'
        company='Flywheel'
        title='Software Engineer Intern'
        link='https://flywheel.io/'
      />
      <Item
        date='May - Dec 2019'
        variant='outlined'
        company='University of Minnesota'
        title='Student Web Support'
        link='https://twin-cities.umn.edu/'
      />
      <Item
        date='Completed July 2019'
        color='success'
        company='Udemy'
        title='The Web Developer Bootcamp'
        link='https://www.udemy.com/course/the-web-developer-bootcamp/'
        icon='fa-brands fa-free-code-camp'
      />
      <Item
        date='Feb - Jun 2019'
        variant='outlined'
        company='Children Story Time'
        title='Frontend Engineer Intern'
        link='https://www.childrenstorytime.co/'
      />
    </Timeline>
  )
}
