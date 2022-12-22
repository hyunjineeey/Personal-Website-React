import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center'
  },
  icon: {
    fontSize: '40px',
    padding: theme.spacing(2, 0)
  },
  featureList: {
    padding: theme.spacing(1)
  }
}))

const Interests = () => {
  const classes = useStyles()

  return (
    <Container component='section' maxWidth='lg'>
      <Grid container spacing={3} alignItems='stretch'>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FontAwesomeIcon className={classes.icon} icon='fa-solid fa-book' color='#bb382a' />
            <Typography variant='h5' component='h3'>
              Reading / Writing
            </Typography>
            <Typography className={classes.featureList}>
              I like to read and write.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FontAwesomeIcon className={classes.icon} icon='fa-solid fa-camera-retro' color='#3bb665' />
            <Typography variant='h5' component='h3'>
              Making a video
            </Typography>
            <Typography className={classes.featureList}>
              I enjoy filming my life.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FontAwesomeIcon className={classes.icon} icon='fa-solid fa-bolt' color='#f3b73b' />
            <Typography variant='h5' component='h3'>
              Explore new things
            </Typography>
            <Typography className={classes.featureList}>
              I am currently taking dance and drum classes!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Interests
