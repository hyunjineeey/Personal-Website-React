import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import jacob from '../images/testimonials/jacob.jpeg'
import joe from '../images/testimonials/joe.jpeg'
import dan from '../images/testimonials/dan.jpeg'
import john from '../images/testimonials/john.jpeg'
import jeff from '../images/testimonials/jeff.jpeg'
import steven from '../images/testimonials/steven.jpeg'
import ming from '../images/testimonials/ming.jpeg'

export default function TestimonialsList () {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <List sx={{ width: '100%', maxWidth: '800px' }}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Jacob Dalton' src={jacob} />
          </ListItemAvatar>
          <ListItemText
            primary='Jacob Dalton'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Technical Lead and Engineering Manager
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    I hired Jin at Sentera, and I would consider her an ideal candidate for an early career engineer although she's already accumulated a really solid depth and breadth of experience.
                  </Typography>
                  <Typography paragraph>
                    She has an open mind, a wonderful positive attitude, and an enormous capacity to learn. She naturally gravitates to self improvement (consuming the majority of books I bought for the technical team). I watched her take on a large and deeply technical feature early in her tenure at Sentera that I was skeptical a new hire could deliver, and she completed it beyond far beyond my expectations. Her skills grew rapidly and consistently throughout the time we worked together.
                  </Typography> <Typography paragraph> Any team would be lucky to have Jin.
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Joe Spencer' src={joe} />
          </ListItemAvatar>
          <ListItemText
            primary='Joe Spencer'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Product Design Manager
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    I cant say enough good things about Jin. She is incredibly smart and has a vast depth of knowledge. She always asked insightful questions, and always kept a keen eye out for the user when crafting interfaces. A pleasure to work with.
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Dan Schoppe' src={dan} />
          </ListItemAvatar>
          <ListItemText
            primary='Dan Schoppe'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Senior Software Engineer
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    Jin is a great engineer and a joy to work with.
                  </Typography>
                  <Typography paragraph>
                    Jin was a contributor on a complex React mapping project at Sentera. She used the latest frontend tools, technologies, and patterns to build a highly functional application — think declarative design, React hooks, accessing a GraphQL API via Apollo Client, Redux, and React providers, etc.
                  </Typography>
                  <Typography paragraph>
                    Our customers expected high availability and high performance from our application. Jin was on a team that used agile best practices (sprints including grooming, planning, retro, and standup) to make thoughtful contributions. We moved quickly to add product features without downtime. She used the latest CI/CD best practices, including auto-deployed changes upon merged GitHub pull requests.
                  </Typography>
                  <Typography paragraph>
                    Jin is smart. She picks up on complex concepts incredibly quickly and is eager to learn. She doesn't shy away from hard problems, but instead embraces a challenge. In fact, she's incredibly determined to work through hard issues, which is a great quality when working in such a fast-moving, complex environment.
                  </Typography>
                  <Typography paragraph>
                    As we all know, software engineering requires a large amount of collaboration and soft skills as well. Jin is great at collaborating with others. She's willing and able to work on the highest priority items for the team. She pair programs well and gives and receives thoughtful code review feedback in a positive manner.
                  </Typography>
                  <Typography paragraph>
                    Jin was a great coworker and would make a great contribution to your frontend team!
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='John Osberg' src={john} />
          </ListItemAvatar>
          <ListItemText
            primary='John Osberg'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Senior Software Engineer
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    Jin was a pleasure to have on the team and shows great potential to have an incredibly successful and fulfilling career. She was thrown into a brand new project with tools she wasn’t familiar with, in a language she hadn’t worked much in, all while navigating what it’s like to work completely remote in a company that's normally in an office. She's a great communicator, and is willing to dive into the unknown and ask questions when needed. She's also willing to step outside of her personal comfort zone in order to learn outside of her daily work - setting up 1-1 time with people around the company to learn about their careers. I hope our paths cross again.
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Jeff Blaisdell' src={jeff} />
          </ListItemAvatar>
          <ListItemText
            primary='Jeff Blaisdell'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Engineering Manager
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    I had the pleasure to work with Hyunjin during her 4 month internship at SmartThings. As part of her internship project she had the opportunity to experience many technologies for the first the time - AWS, Java, Groovy, Kotlin, Spring Boot, Gradle, Docker, and many others. Tackling so many new things at once can be a daunting challenge for even a senior engineer. Hyunjin was up to the challenge, and she pushed herself every day to learn more. At the end of her internship she had completed a project that successfully tied all of those technologies together. She brings a positive attitude with her daily, and the team very much enjoyed having her as part of the group. I would not hesitate to recommend Hyunjin to any future employer looking for a junior engineer to add to their team.
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Steven Pliam' src={steven} />
          </ListItemAvatar>
          <ListItemText
            primary='Steven Pliam'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Head Software Engineer
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    It has been my great pleasure to work and interact with Hyunjin. I have rarely encountered a person who can bring such an inquisitive spirit to their work and such a thorough, rigorous investigation to every component of a project, no matter how banal. Such commitment and enthusiasm for the details that make the difference is exceedingly hard to find in people. What I also found very delightful, even inspiring, about working with Hyunjin was her passion and curiosity for life, but particularly with regard to technology and its role in society. Her high level of interest in computer science is obvious, but it's not just an interest in technology for its own sake; rather, I had the distinct impression that the vision she holds for her future role in developing technology embraces a much wider range of function and responsibility to the world, and that this is critically important to her.
                  </Typography>
                  <Typography paragraph>
                    Apart from these standout qualities, I found that Hyunjin possessed extraordinary organizational skills along with the ability to go directly at any task; she would take great pride just in the efficacy of completing them. Her presence in our research group was, in itself, a force to keep things on track. As we often had to deal with a huge set of problem-solving issues, both large and small, her ability to focus and stay organized often helped my own efforts to keep on top of everything needing attention.
                  </Typography>
                  <Typography paragraph>
                    If you'll be lucky enough to have the opportunity to work with Hyunjin, I can promise that it won't be long before your organization recognizes what a resource it has in this person.
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
        <Divider component='li' />
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Ming Tan' src={ming} />
          </ListItemAvatar>
          <ListItemText
            primary='Ming Tan'
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Director of IT
                </Typography>
                <Box
                  sx={{ mt: '4px' }}
                  color='text.primary'
                >
                  <Typography paragraph>
                    I have been a mentor for Hyunjin since 2018 through the U of Minnesota mentoring program. There are many things about her that have made this relationship very rewarding.
                  </Typography>
                  <Typography paragraph>
                    1. She is intellectually curious. As an international student, she loves to learn and immerse herself in the American culture. And as a computer science student, she is interested in the different technologies and she constantly applies the new acquired skills on her personal projects.
                    <br /> 2. Hyunjin is a very motivated individual. She works hard in school (computer science major) and is always looking for internship/volunteer opportunities to expand her experience.
                    <br /> 3. Accountable - this is the one of the things that sets Hyunjin apart. During our bi-weekly meetings, we always put together a list of action items (e.g. reading assignments, resume building, personal site, etc) for the next meeting, and Hyunjin always completes the items on time.
                  </Typography>
                  <Typography paragraph>
                    It has been a pleasure to work with such a quality person like Hyunjin!
                  </Typography>
                </Box>
              </>
          }
          />
        </ListItem>
      </List>
    </Box>
  )
}
