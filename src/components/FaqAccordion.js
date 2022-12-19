import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from '@mui/material/Link'

export default function FaqAccordion () {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>How do you pronounce your name?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can pronounce my name as <Link
              href='https://youtu.be/ZUfRG3Q6K_E' underline='none' target='_blank' rel='noreferrer'
                                         >Hyeon-jin
            </Link
            >. Some of my friends call me 'Jin' or 'Jiny'. For your information, 'Hyunjin Jae' means 'Be a Bright Influence on the World'. That is what I am going to do in the future.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Why do you code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I believe that coding can change the world. There are many things that can be improved with coding. From small inconveniences to how an entire task is performed. Let’s suppose you have some inconveniences in your life and you want to make it better. Coding can fix it. All you need is a computer. You can make a program whenever or wherever you like, such as cafes, parks, even in your dorm. I believe through a completed program, one may receive great help in their daily lives and through this help they could live a happier life. Isn't it cool to contribute to someone's life? I'm putting a lot of energy into coding so that someone can live a better life.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
