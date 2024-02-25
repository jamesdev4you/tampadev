import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MyNormalButton } from '../../styledComponents'
import { ReactTyped } from 'react-typed';

const HeaderText = () => {
    return (
        <Box
          sx={{
            width: { xl: '50%', lg: '100%', md: '100%', sm: '90%', xs: '100%' },
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center' },
            justifyContent: 'start',
          }}
        >
          <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
            Bizziest Bees
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Busy <span />
        <ReactTyped
          style={{ color: 'red' }}
          strings={[
            ' develop websites.',
            ' design websites.',
            ' do social media marketing.',
            ' do SEO.',
            ' help people.',
          ]}
          typeSpeed={100}
          loop
          backSpeed={70}
          cursorChar='|'
          showCursor={true}
        />
      
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              textAlign: { xl: 'left', lg: 'left', md: 'left', sm: 'center', xs: 'center' },
              marginTop: '1em',
              marginBottom: '1em',
              fontWeight: 'bold',
            }}
          >
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </Typography>
          <Box
            sx={{
              display: {
                xl: 'flex',
                lg: 'flex',
                md: 'none',
                sm: 'none',
                xs: 'none',
              },
              width: '100%',
              justifyContent: 'space-between',
             
            }}
          >
            <MyNormalButton children='Learn More' />
            <MyNormalButton children='Request Service' />
          </Box>
          <Box
            sx={{
              display: {
                xl: 'none',
                lg: 'none',
                md: 'flex',
                sm: 'flex',
                xs: 'flex',
              },
              width: '100%',
              justifyContent: {
                xl: 'start',
                lg: 'start',
                md: 'start',
                sm: 'center',
                xs: 'center',
              },
            }}
          >
            <MyNormalButton children='Learn More' />
          </Box>
        </Box>
      );
}

export default HeaderText