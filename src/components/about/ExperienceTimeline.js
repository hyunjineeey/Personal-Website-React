import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

import { theme } from '../../theme'

const Responsive = styled('div')(({ theme, page }) => ({
  [theme.breakpoints.up('mobile')]: {
    marginLeft: '70px'
  },
  [theme.breakpoints.up('tablet')]: {
    margin: 0
  },
  [theme.breakpoints.up('desktop')]: {
    margin: 0
  }
}))

export default function ExperienceTimeline () {
  const { t } = useTranslation(['about'])
  const Item = ({ date, variant, color, company, title, link, icon }) => {
    return (
      <ThemeProvider theme={theme}>
        <Responsive page='about'>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{
                fontSize: '0.9rem',
                textAlign: 'right',
                display: { mobile: 'none', tablet: 'block', desktop: 'block' }
              }}
              variant='body3'
            >
              {date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* {icon ? ( */}
              <TimelineDot color={color}>
                <FontAwesomeIcon size='xs' icon={icon} />
              </TimelineDot>
              {/* ) : (
                <TimelineDot variant={variant} color={color} />
              )} */}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link
                href={link}
                underline='none'
                target='_blank'
                rel='noreferrer'
              >
                {company}
              </Link>
              <br />
              {title}
              <br />
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'text.secondary',
                  display: {
                    mobile: 'block',
                    tablet: 'none',
                    desktop: 'none'
                  }
                }}
              >
                {date}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Responsive>
      </ThemeProvider>
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
        icon='fa-solid fa-briefcase'
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
        icon='fa-solid fa-briefcase'
      />
      <Item
        date={t('about:flywheel.date')}
        variant='outlined'
        company='Flywheel'
        title={t('about:softwareEngineerIntern')}
        link='https://flywheel.io/'
        icon='fa-solid fa-briefcase'
      />
      <Item
        date={t('about:umnWork.date')}
        variant='outlined'
        company='University of Minnesota'
        title={t('about:umnWork.title')}
        link='https://twin-cities.umn.edu/'
        icon='fa-solid fa-briefcase'
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
        icon='fa-solid fa-briefcase'
      />
    </Timeline>
  )
}
