import React from 'react'
import Box from '@mui/material/Box';
import Header from './header/Header';
import Navbar from '../Navbar/Navbar';



const Home = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'warning.main',
        padding: {
          xs: '0em 0em 4em',
          sm: '6em 0em 4em',
          md: '4em 0em 4em',
          lg: '8em 0em 7em',
          xl: '12em 0em 4em',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <Navbar />
      <Header  /></Box>
  )
}

export default Home