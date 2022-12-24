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
import { useTranslation } from 'react-i18next'

export default function ExperienceTimeline () {
  const { t } = useTranslation(['about'])
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
            : (
              <TimelineDot variant={variant} color={color} />
              )}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link href={link} underline='none' target='_blank' rel='noreferrer'>
            {company}
          </Link>
          <br />
          {title}
        </TimelineContent>
      </TimelineItem>
    )
  }
  return (
    <Timeline sx={{ p: 0 }}>
      <Item
        date={t('about:sentera.date')}
        variant='filled'
        company='Sentera'
        title={t('about:sentera.title')}
        link='https://sentera.com/'
      />
      <Item
        date={t('about:umnSchool.date')}
        color='warning'
        company='University of Minnesota'
        title={t('about:umnSchool.title')}
        link='https://cse.umn.edu/college/computer-science'
        icon='fa-solid fa-graduation-cap'
      />
      <Item
        date={t('about:udemyReact.date')}
        color='success'
        company='Udemy'
        title={t('about:udemyReact.title')}
        link='https://www.udemy.com/course/modern-react-bootcamp/'
        icon='fa-brands fa-free-code-camp'
      />
      <Item
        date={t('about:smartThings.date')}
        variant='outlined'
        company='SmartThings'
        title={t('about:softwareEngineerIntern')}
        link='https://www.smartthings.com/'
      />
      <Item
        date={t('about:flywheel.date')}
        variant='outlined'
        company='Flywheel'
        title={t('about:softwareEngineerIntern')}
        link='https://flywheel.io/'
      />
      <Item
        date={t('about:umnWork.date')}
        variant='outlined'
        company='University of Minnesota'
        title={t('about:umnWork.title')}
        link='https://twin-cities.umn.edu/'
      />
      <Item
        date={t('about:udemyWeb.date')}
        color='success'
        company='Udemy'
        title={t('about:udemyWeb.title')}
        link='https://www.udemy.com/course/the-web-developer-bootcamp/'
        icon='fa-brands fa-free-code-camp'
      />
      <Item
        date={t('about:childrenStoryTime.date')}
        variant='outlined'
        company='Children Story Time'
        title={t('about:childrenStoryTime.title')}
        link='https://www.childrenstorytime.co/'
      />
    </Timeline>
  )
}
