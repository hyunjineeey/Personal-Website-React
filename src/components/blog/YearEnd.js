import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import { Trans, useTranslation } from 'react-i18next'

import pic2020 from '../../images/blog/2020.JPG'
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

export default function YearEnd() {
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
                title={t('yearEnd:title')}
                datePublished={t('yearEnd:datePublished')}
                minRead={t('yearEnd:minRead')}
                dateUpdated={t('yearEnd:dateUpdated')}
                img={pic2020}
                alt='2020YearEnd'
                sub={t('yearEnd:sub')}
              />
              <SectionTitle title={t('yearEnd:covid.title')} />
              <p>
                <Trans t={t} i18nKey='yearEnd:covid.firstLine'>
                  Minnesota in February is extremely cold. On the streets, the
                  snow that has fallen all night is piled up to the knees, and
                  some people wear
                  <em>masks</em> to protect their faces from the cold wind. As
                  usual, I went to school to take classes in the classroom, and
                  after that, I went to the next class, talking with my friends.
                  After finishing all of the classes, we had a light dinner and
                  went to the library to study together. I was just having
                  <em>ordinary</em> days without anything special.
                </Trans>
              </p>
              <MultilineParagraph lines={t('yearEnd:covid.lines')} />

              <SectionTitle title={t('yearEnd:internship.title')} />
              <p>
                <Trans t={t} i18nKey='yearEnd:internship.lines'>
                  Lots of companies had canceled or delayed their scheduled
                  internships due to the impact of COVID-19. There were actually
                  some friends of mine whose jobs got canceled, not only interns
                  but also full-time jobs. I was worried that it would happen to
                  me, but fortunately, I was able to start my internship as
                  scheduled. Although it was entirely working from home
                  throughout the internship period, it was a phenomenal
                  experience. More information about the internship experience
                  can be found
                  <a
                    href='./SmartThings'
                    style={{ textDecoration: 'none', color: 'blue' }}
                  >
                    here.
                  </a>
                </Trans>
              </p>

              <SectionTitle title={t('yearEnd:blackLivesMatter.title')} />
              <MultilineParagraph lines={t('yearEnd:blackLivesMatter.lines')} />
              <p>
                <Trans t={t} i18nKey='yearEnd:blackLivesMatter.learning'>
                  There were so many things that I learned from this incident,
                  and one thing is clear:
                  <em>learning is a never-ending journey.</em>
                  The more I learned, the more the case looked different. I
                  realized thoroughly how much the amount of learning changes
                  the world. How each individual thinks and acts has a
                  significant influence on society. The individuals create a
                  culture, and those cultures can solve or deepen social issues
                  such as racial discrimination. I will learn more because I, or
                  we, make our history.
                </Trans>
              </p>
              <p>
                <Trans t={t} i18nKey='yearEnd:blackLivesMatter.confucius'>
                  I would like to close my thoughts on this case with a
                  paragraph from a book called <em>Analects of Confucius</em> by
                  Confucius.
                </Trans>
              </p>
              <p>
                <Trans t={t} i18nKey='yearEnd:blackLivesMatter.close'>
                  "
                  <em>
                    If there truly was justice in the world, people would
                    understand and follow any rule or duty. There would be no
                    voices of criticism, yet criticism can be heard. In other
                    words, the voices of criticism from the people are no
                    different to a warning to the world that justice no longer
                    prevails.
                  </em>
                  "
                </Trans>
              </p>

              <SectionTitle title={t('yearEnd:vehicle.title')} />
              <MultilineParagraph lines={t('yearEnd:vehicle.lines')} />

              <SectionTitle title={t('yearEnd:regulations.title')} />
              <p>
                <Trans t={t} i18nKey='yearEnd:regulations.firstLine'>
                  As the Fall 2020 semester quickly approached, schools had to
                  decide on class format, whether it is in-person, online, or
                  both. Most schools preferred to go with online classes due to
                  COVID-19 pandemic. The University of Minnesota was one of
                  them, and all of the classes I registered for were confirmed
                  as online. In the meantime, with about a month left until
                  starting the Fall semester, the
                  <a
                    href='https://www.ice.gov/news/releases/sevp-modifies-temporary-exemptions-nonimmigrant-students-taking-online-courses-during#wcm-survey-target-id'
                    target='_blank'
                    style={{ textDecoration: 'none', color: 'blue' }}
                    rel='noreferrer'
                  >
                    U.S. Immigration and Customs
                  </a>
                  Enforcement, known as ICE, issued a new executive order:
                  international students are required to attend in-person
                  classes or leave the country. More specific orders are as
                  follows:
                </Trans>
              </p>
              <MultilineList lines={t('yearEnd:regulations.order')} />
              <p>
                <Trans t={t} i18nKey='yearEnd:regulations.secLine'>
                  There are several reasons why the ICE makes this order.
                  According to
                  <a
                    href='https://abcnews.go.com/Politics/trump-insists-schools-open-fall-local-authorities-hold/story?id=71648610'
                    target='_blank'
                    style={{ textDecoration: 'none', color: 'blue' }}
                    rel='noreferrer'
                  >
                    ABC News
                  </a>
                  , President Trump repeatedly insisted schools 'must open' in
                  Fall and it is tied to his broader push for the country to
                  resume normal economic functions. According to
                  <a
                    href='https://www.npr.org/sections/coronavirus-live-updates/2020/07/06/888026874/ice-foreign-students-must-leave-the-u-s-if-their-colleges-go-online-only-this-fa'
                    target='_blank'
                    style={{ textDecoration: 'none', color: 'blue' }}
                    rel='noreferrer'
                  >
                    NPR News
                  </a>
                  , international students contributed $41 billion and supported
                  458,290 jobs during the 2018-2019 academic year. International
                  students were being targeted in order to force schools to open
                  because losing them is a huge blow to university budgets.
                </Trans>
              </p>
              <MultilineParagraph lines={t('yearEnd:regulations.lines')} />

              <SectionTitle title={t('yearEnd:graduation.title')} />
              <MultilineParagraph lines={t('yearEnd:graduation.lines')} />

              <SectionTitle title={t('yearEnd:conclusion.title')} />
              <MultilineParagraph lines={t('yearEnd:conclusion.lines')} />
            </Box>
          </Responsive>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  )
}
