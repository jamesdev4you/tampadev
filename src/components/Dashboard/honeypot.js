import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import beeCursor from '../../assets/pictures/cursor.png';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../index.css';
import {MyHoneyButton, MyHiveButton} from '../styledComponents';

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

const rows = [
    { id: 1, picture: 'Picture URL or Component', text: 'Example Text 1' },
    { id: 2, picture: 'Picture URL or Component', text: 'Example Text 2' },
  ];


  const handleDownload = () => {
    console.log('Implement data download functionality here.');
  };

  
const Honeypot = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
        className='stylesFlexBox'
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
      >
    <Box
      sx={{
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '5em',
        paddingBottom: '3em',
        backgroundColor: 'black',
        cursor: `url(${beeCursor}), auto`,
        paddingTop: {xs:'3em', sm: '0em'},
      }}
    >
        <Typography variant='h2' sx={{ fontWeight: 'bold',  width: '100%', textAlign: 'center', color: 'white', marginTop: '3em' }}>
                    Download Content
                </Typography>
        
        <TableContainer component={Paper} sx={{ width: '80%', overflow: 'hidden', borderRadius: '15px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>Pictures and Descriptions</TableCell>
              
              {/* Add more table headers if needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <>
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.picture}
                </TableCell>
            </TableRow>
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{row.text}</TableCell>
                
              </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{width: '80%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: {xs: 'column', sm: 'row'}, gap: '3em'}}>
      <MyHoneyButton onClick={handleDownload}>Download Data</MyHoneyButton>
      <MyHiveButton>Go Back to Hive</MyHiveButton>
      </Box>
      {/* Replace with IconButton if preferred */}
      {/* <IconButton onClick={handleDownload} aria-label="download">
        <DownloadIcon />
      </IconButton> */}
    </Box>
    </motion.div>
  )
}

export default Honeypot