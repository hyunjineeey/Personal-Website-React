import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import { Trans, useTranslation } from 'react-i18next'
import CardMedia from '@mui/material/CardMedia'

import diagram from '../../images/blog/diagram.png'
import Footer from '../Footer'
import SectionTop, { SectionTitle } from './SectionTop'
import { theme, MultilineParagraph, MultilineList } from '../../Styles'

const Responsive = styled('div')(({ theme, page }) => ({
  [theme.breakpoints.up('mobile')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  [theme.breakpoints.up('tablet')]: {
    margin: 0,
  },
  [theme.breakpoints.up('desktop')]: {
    margin: 0,
  },
}))

const Timeline = ({ week, lines }) => {
  return (
    <>
      <p>{week}</p>
      <MultilineList lines={lines} />
    </>
  )
}

export default function SmartThings() {
  const { t } = useTranslation()

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <ThemeProvider theme={theme}>
          <Responsive>
            <Box
              sx={{
                textAlign: 'left',
                width: '100%',
                maxWidth: '900px',
                lineHeight: '160%',
              }}
            >
              <SectionTop
                title={t('smartThings:title')}
                datePublished={t('smartThings:datePublished')}
                minRead={t('smartThings:minRead')}
                dateUpdated={t('smartThings:dateUpdated')}
              />

              <CardMedia
                component='img'
                image={diagram}
                alt='diagram'
                style={{
                  maxWidth: 750,
                  maxHeight: 550,
                  margin: '30px 0 30px 0',
                }}
              />
              <MultilineParagraph lines={t('smartThings:sub')} />

              <MultilineList lines={t('smartThings:projectDate')} />

              <SectionTitle title={t('smartThings:timeline.title')} />

              <Timeline
                week={t('smartThings:timeline.week1.title')}
                lines={t('smartThings:timeline.week1.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week3.title')}
                lines={t('smartThings:timeline.week3.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week4.title')}
                lines={t('smartThings:timeline.week4.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week6.title')}
                lines={t('smartThings:timeline.week6.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week8.title')}
                lines={t('smartThings:timeline.week8.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week10.title')}
                lines={t('smartThings:timeline.week10.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week11.title')}
                lines={t('smartThings:timeline.week11.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week13.title')}
                lines={t('smartThings:timeline.week13.lines')}
              />
              <Timeline
                week={t('smartThings:timeline.week14.title')}
                lines={t('smartThings:timeline.week14.lines')}
              />

              <SectionTitle title={t('smartThings:whatILearned.title')} />
              <MultilineParagraph
                lines={t('smartThings:whatILearned.firstLine')}
              />
              <MultilineList lines={t('smartThings:whatILearned:tools')} />
              <MultilineParagraph
                lines={t('smartThings:whatILearned.secLine')}
              />
              <MultilineList lines={t('smartThings:whatILearned:program')} />
              <MultilineParagraph
                lines={t('smartThings:whatILearned.lastLine')}
              />

              <SectionTitle title={t('smartThings:whatILiked.title')} />
              <MultilineParagraph lines={t('smartThings:whatILiked.lines')} />

              <SectionTitle title={t('smartThings:whatICouldImprove.title')} />
              <MultilineParagraph
                lines={t('smartThings:whatICouldImprove.lines')}
              />
              <p>
                <Trans t={t} i18nKey='smartThings:whatICouldImprove.lastLine'>
                  The more I learn, the more humble I have to be. I can always
                  improve on staying humble and hustling hard. This field is
                  where new things are constantly being updated. Because of
                  that, I should always have the attitude of learning
                  accordingly. I shouldn't hide a passion for <em>anything</em>!
                </Trans>
              </p>

              <SectionTitle title={t('smartThings:conclusion.title')} />
              <MultilineParagraph lines={t('smartThings:conclusion.lines')} />

              <p>
                <Trans t={t} i18nKey='smartThings:conclusion.github'>
                  This
                  <a
                    href='https://github.com/hyunjineeey/Synthetic-monitoring'
                    target='_blank'
                    style={{
                      textDecoration: 'none',
                      color: 'blue',
                      fontStyle: 'italic',
                    }}
                    rel='noreferrer'
                  >
                    link
                  </a>
                  will take you to a Github repository of this project.
                </Trans>
              </p>
            </Box>
          </Responsive>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  )
}
