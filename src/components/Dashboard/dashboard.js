import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as X } from '../../assets/svg/x.svg';
import { ReactComponent as Blog } from '../../assets/svg/blog.svg';
import { ReactComponent as CustomerService } from '../../assets/svg/customer-support.svg';
import { ReactComponent as Email } from '../../assets/svg/email.svg';
import { ReactComponent as Honey } from '../../assets/svg/honey.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/system';
import beeCursor from '../../assets/pictures/cursor.png';
import { useNavigate } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../index.css';

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

const Hexagon = styled('div')(({ theme }) => ({
    width: '150px',
    height: '86.6px', 
    backgroundColor: 'gold',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '43.3px 0', 

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: 0,
      borderLeft: '75px solid transparent', 
      borderRight: '75px solid transparent', 


      
    },
    '&::before': {
      bottom: '100%',
      borderBottom: '43.3px solid 	gold', 


    },
    '&::after': {
      top: '100%',
      borderTop: '43.3px solid 	gold', 


    },
  }));

const Dashboard = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const navigate = useNavigate();

const handleNavigate = (path) => {
  navigate(path);
};

  
  
    const [hovered, setHovered] = useState(null);

    const hiveOptions = [
        {
          logo: Honey,
          text: 'Honey Pot',
          viewBox: '0 0 512 512',
          key: 1,
          path: '/honey-pot',
        },
        {
          logo: X,
          text: 'Twitter',
          viewBox: '0 0 512 512',
          key: 2,
          path: '/twitter-form',
        },
        {
          logo: Blog,
          text: 'Blogs',
          viewBox: '0 0 512 512',
          key: 3,
        },
        {
          logo: CustomerService,
          text: 'ChatBots',
          viewBox: '0 0 100 100',
          key: 4,
        },
        {
          logo: Facebook,
          text: 'Outreach',
          viewBox: '0 0 512 512',
          key: 5,
        },
        {
          logo: Email,
          text: 'Email',
          viewBox: '0 0 512 512',
          key: 6,
        },
      ];

  return (
    <Box
      sx={{
        height: 'auto',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '5em',
        paddingBottom: '3em',
        backgroundColor: 'black',
        cursor: `url(${beeCursor}), auto`,
        paddingTop: {xs:'3em', sm: '0em'},
      }}
    >
                <Box sx={{textAlign:'center', width: {xs: '80%', sm: '100%'}, flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', textDecoration: 'underline', width: '100%', textAlign: 'center', color: 'white' }}>
                    Welcome to the Hive
                </Typography>
                <Typography
            variant='h5'
            sx={{
              width: '80%',
              textAlign:'center',
              marginTop: '1em',
              marginBottom: '1em',
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Dive into the Hive and create content! All content created will be stored in your Honey Pot.
          </Typography>
          </Box>
                <Grid container spacing={6} sx={{width: '90%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                    {hiveOptions.map((item) => (
                      
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={item.key} onClick={() => handleNavigate(item.path)} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Hexagon>
                            <SvgIcon
                            onMouseEnter={() => setHovered(item.key)}
                            onMouseLeave={() => setHovered(null)}
              viewBox={item.viewBox}
              component={item.logo}
              sx={{
                transition: 'all .2s ease-in-out',
                height: 
                   hovered === item.key ? '80px' : '70px',
                 

                width: 
                  hovered === item.key ? '80px' : '70px',
                
                color: 'primary.main',
              }}
            ></SvgIcon>
                            </Hexagon>
                        </Grid>
                        
                    ))}
                </Grid>

        </Box>
  )
}

export default Dashboard