import React, {useState} from 'react'
import Box from '@mui/material/Box';
import { ReactComponent as BlogIcon } from '../../assets/svg/blog.svg';
import { ReactComponent as DollarIcon } from '../../assets/svg/dollar.svg';
import { ReactComponent as HeaterIcon } from '../../assets/svg/heater.svg';
import { ReactComponent as OutdoorUnitIcon } from '../../assets/svg/outdoor-unit.svg';
import { ReactComponent as PhoneIcon } from '../../assets/svg/phone-call.svg';
import { ReactComponent as ThermostatIcon } from '../../assets/svg/thermostat.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/system';

const Hexagon = styled('div')(({ theme }) => ({
    width: '150px',
    height: '86.6px', 
    backgroundColor: '	#ea9d3e',
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
      borderBottom: '43.3px solid 	#ea9d3e', 


    },
    '&::after': {
      top: '100%',
      borderTop: '43.3px solid 	#ea9d3e', 


    },
  }));

const Dashboard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const [hovered, setHovered] = useState(null);

    const hiveOptions = [
        {
          logo: BlogIcon,
          text: 'Blogs',
          viewBox: '0 0 512 512',
          key: 1,
        },
        {
          logo: DollarIcon,
          text: 'Price Estimate',
          viewBox: '0 0 512 512',
          key: 2,
        },
        {
          logo: HeaterIcon,
          text: 'Heating',
          viewBox: '0 0 512 512',
          key: 3,
        },
        {
          logo: OutdoorUnitIcon,
          text: 'Air Conditioning',
          viewBox: '0 0 74 74',
          key: 4,
        },
        {
          logo: PhoneIcon,
          text: 'Call Now',
          viewBox: '0 0 512 512',
          key: 5,
        },
        {
          logo: ThermostatIcon,
          text: 'Thermostat',
          viewBox: '0 0 512 512',
          key: 6,
        },
      ];

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
        gap: '5em',
        paddingBottom: '3em',
      }}
    >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%', height: '60px', backgroundColor: 'black', marginBottom: '1em', paddingRight: '1em'}}> </Box>
                <Typography variant='h1' sx={{ fontWeight: 'bold', textDecoration: 'underline', width: '100%', textAlign: 'center' }}>
                    Welcome to the <span style={{color: 'darkgold'}}>BeeHive</span>
                </Typography>
                <Grid container spacing={6} sx={{width: '90%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {hiveOptions.map((item) => (
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={item.key}  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Hexagon>
                            <SvgIcon
                            onMouseEnter={() => setHovered(item.key)}
                            onMouseLeave={() => setHovered(null)}
              viewBox={item.viewBox}
              component={item.logo}
              sx={{
                transition: 'all .2s ease-in-out',
                height: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === item.key ? '40px' : '30px',
                  lg: hovered === item.key ? '40px' : '75px',
                  xl: hovered === item.key ? '40px' : '35px',
                },

                width: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === item.key ? '40px' : '30px',
                  lg: hovered === item.key ? '40px' : '75px',
                  xl: hovered === item.key ? '40px' : '35px',
                },
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