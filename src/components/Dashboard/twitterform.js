import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { ReactComponent as X } from '../../assets/svg/x.svg';
import TextField from '@mui/material/TextField';
import { MyFormButton } from '../styledComponents';
import beeCursor from '../../assets/pictures/cursor.png';
import SvgIcon from '@mui/material/SvgIcon';





const TwitterForm = () => {
  const [mood, setMood] = useState('');
  const [tone, setTone] = useState('');
  const [description, setDescription] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const queryParams = new URLSearchParams({ mood, description, tone, }).toString();
    const url = `http://127.0.0.1:9500/ai_api/send_post_request?${queryParams}`;
    console.log('yooo', url);
    try {
      const response = await fetch(url); 
      const data = await response.json(); 
      

      console.log('gooo', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  
  return (
    <Box
      sx={{
        height: 'auto',
        paddingBottom: '6em',
        width: '100%',
        backgroundColor: 'warning.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: {xs: '3em', sm: '6em'},
        cursor: `url(${beeCursor}), auto`,
      }}
    >
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%', height: '60px', backgroundColor: 'black', marginBottom: '3em', paddingRight: '1em'}}> </Box>
        <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
      textAlign: 'center',
      height: 'auto',
      width: '100%',
    }}
    >
        <Container sx={{
            width: {
              xs: '100%', sm: '100%', md: '80vw', lg: '50vw', xl: '70vw',
            },
            position: 'relative',
            height: 'auto',
          }}
          >
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '30px',
                borderRadius: '35px',
                backgroundColor: 'black',
                height: { xs: 'auto', sm: '80%' },
                border: '2px solid white',
                justifyContent: 'end',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                paddingTop: {xs: '8em', sm:'9em'},

              }}
              >
                
                <Box sx={{
                  border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '100px', sm: '150px' }, height: { xs: '100px', sm: '150px' }, top: { xs: '-8%', sm: '-14%' }, borderRadius: '50%',
                }}
                >
                  
                  <SvgIcon
                  
                            
              viewBox="0 0 512 512"
              component={X}
              sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }}
            ></SvgIcon>
                </Box>
                
                   
                   <form onSubmit={handleSubmit} style={{gap: '30px', display: 'flex',
                  
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:'90%',
                  flexDirection: 'column',
                  marginTop: '1em'}}>
        
        <TextField
          error
          id="outlined-error"
          label="Business Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          color="primary"
          sx={{
            input: { cursor: `url(${beeCursor}), auto`, },
            width: '80%',
            '& label.Mui-focused': {
              color: 'gold',
            },
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'gold',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'gold',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        <TextField
          error
          id="outlined-error"
          label="Business Mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          color="primary"
          sx={{
            input: { cursor: `url(${beeCursor}), auto`, },
            width: '80%',
            '& label.Mui-focused': {
              color: 'gold',
            },
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'gold',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'gold',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        <TextField
          
          onChange={(e) => setTone(e.target.value)}
          label="Tone"
          value={tone}
          color="primary"
          sx={{
            input: { cursor: `url(${beeCursor}), auto`, },
            width: '80%',
            '& label.Mui-focused': {
              color: 'gold',
            },
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'gold',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'gold',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        < MyFormButton children="Submit"/>
        </form>
                  
                
                
              </Card>
          </Container>
    </Box>
        </Box>
  )
}

export default TwitterForm