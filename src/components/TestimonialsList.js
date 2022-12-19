import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export default function TestimonialsList () {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems='flex-start'>
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
              <Typography paragraph>
                I hired Jin at Sentera, and I would consider her an ideal candidate for an early career engineer although she's already accumulated a really solid depth and breadth of experience.
              </Typography>
              <Typography paragraph>
                She has an open mind, a wonderful positive attitude, and an enormous capacity to learn. She naturally gravitates to self improvement (consuming the majority of books I bought for the technical team). I watched her take on a large and deeply technical feature early in her tenure at Sentera that I was skeptical a new hire could deliver, and she completed it beyond far beyond my expectations. Her skills grew rapidly and consistently throughout the time we worked together.
              </Typography> <Typography paragraph> Any team would be lucky to have Jin.
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider component='li' />
      <ListItem alignItems='flex-start'>
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
                Product Design Manager at Sentera
              </Typography>
              <Typography paragraph>
                I cant say enough good things about Jin. She is incredibly smart and has a vast depth of knowledge. She always asked insightful questions, and always kept a keen eye out for the user when crafting interfaces. A pleasure to work with.
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider component='li' />
      <ListItem alignItems='flex-start'>
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
            </>
          }
        />
      </ListItem>
    </List>
  )
}
