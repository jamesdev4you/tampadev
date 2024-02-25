import React from 'react';
import Box from '@mui/material/Box';
import beeCursor from '../../assets/pictures/cursor.png';


const honeypot = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '5em',
        paddingBottom: '3em',
        backgroundColor: 'white',
        cursor: `url(${beeCursor}), auto`,
        paddingTop: {xs:'3em', sm: '0em'},
      }}
    >
        <Box sx={{width: '80%', height: '80%', backgroundColor: 'black', borderRadius: '15px'}}>
yo
        </Box>
    </Box>
  )
}

export default honeypot