import React from 'react'
import Box from '@mui/material/Box';
import Header from './header/Header';
import Navbar from '../Navbar/Navbar';
import HomeAbout from './about/homeAbout';
import HomeAbout2 from './about/homeAbout2';
import HomeAbout3 from './about/homeAbout3';
import beeCursor from '../../assets/pictures/cursor.png';



const Home = () => {
  return (
    
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'warning.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
        cursor: `url(${beeCursor}), auto`,
      }}
    >
        <Navbar />
      <Header  />
      <Box sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'warning.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10em',
        marginBottom: '50px'
      }}>

      
      <HomeAbout/> 
      <HomeAbout2/> 
      <HomeAbout3/>
      </Box></Box>
  )
}

export default Home