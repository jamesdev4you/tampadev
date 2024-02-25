import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TextField from '@mui/material/TextField';
import { MyFormButton } from '../styledComponents';



const LoginForm = () => {
  return (
    <Box
      sx={{
        height: '110vh',
        width: '100%',
        backgroundColor: 'warning.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '6em'
      }}
    >
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%', height: '60px', backgroundColor: 'black', marginBottom: '3em', paddingRight: '1em'}}> </Box>
        <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
      textAlign: 'center',
      height: 'auto',
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
                height: { xs: '500px', sm: '80%' },
                border: '2px solid white',
                justifyContent: 'end',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                paddingTop: '5em',

              }}
              >
                
                <Box sx={{
                  border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', background: 'linear-gradient(90deg, hsla(1, 84%, 80%, 1) 0%, hsla(56, 100%, 50%, 1) 100%)', width: { xs: '100px', sm: '150px' }, height: { xs: '100px', sm: '150px' }, top: { xs: '-8%', sm: '-14%' }, borderRadius: '50%',
                }}
                >
                  <EditNoteIcon name="services" sx={{ height: { xs: '50px', sm: '100px' }, width: { xs: '50px', sm: '100px' }, color: 'black' }} />

                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '90%', sm: '100%' },
                  flexDirection: 'column',
                  marginTop: '1em'
                }}
                >
                   
        
        <TextField
          error
          id="outlined-error"
          label="Email"
          
          color="primary"
          sx={{
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
          label="Password"
          
          color="primary"
          sx={{
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
          label="Business Description"
          
          color="primary"
          sx={{
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
          label="Business Name"
          
          color="primary"
          sx={{
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
          label="Business Focus"
          
          color="primary"
          sx={{
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
        
                   </Box>
                
                
              </Card>
          </Container>
    </Box>
        </Box>
  )
}

export default LoginForm