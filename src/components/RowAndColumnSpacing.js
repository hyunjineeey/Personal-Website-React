import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}))

export default function RowAndColumnSpacing () {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{ width: '100%' }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 1, md: 1 }}>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-react'
              size='4x'
              style={{ color: '#5ed4f4' }}
            />
            <Typography>React</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-js'
              size='4x'
              style={{ color: '#d4b52a' }}
            />
            <Typography>JavaScript</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-node'
              size='4x'
              style={{ color: '#73ad5e' }}
            />
            <Typography>Node.js</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-html5'
              size='4x'
              style={{ color: '#dd4d26' }}
            />
            <Typography>HTML</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-css3-alt'
              size='4x'
              style={{ color: '#146fb1' }}
            />
            <Typography>CSS</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-php'
              size='4x'
              style={{ color: '#697ab2' }}
            />
            <Typography>PHP</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-java'
              size='4x'
              style={{ color: '#dc2d29' }}
            />
            <Typography>Java</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-python'
              size='4x'
              style={{ color: '#749abe' }}
            />
            <Typography>Python</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-solid fa-database'
              size='4x'
              style={{ color: '#df33a6' }}
            />
            <Typography>GraphQL</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-git'
              size='4x'
              style={{ color: '#ea4d31' }}
            />
            <Typography>Git</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-jira'
              size='4x'
              style={{ color: '#126be1' }}
            />
            <Typography>Jira</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item>
            <FontAwesomeIcon
              icon='fa-brands fa-figma'
              size='4x'
              style={{ color: '#09c87e' }}
            />
            <Typography>Figma</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
