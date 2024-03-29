import { createTheme } from '@mui/material'

export const MultilineParagraph = ({ lines }) => {
  const items = lines?.split('\n')
  return (
    <>
      {items?.map((item) => (
        <p>{item}</p>
      ))}
    </>
  )
}

export const MultilineList = ({ lines }) => {
  const items = lines?.split('\n')
  return (
    <ul>
      {items?.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200
    }
  }
})

export default theme
