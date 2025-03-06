import React from 'react'
import { Button, Grid2, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'

const Login = () => {
  return (
    <div>
      
      <Grid2 container spacing={2} justifyContent="center">
      <Grid2 xs={12} md={4} />
      <Grid2 xs={12} md={4}>
        <TextField fullWidth variant="outlined" type="email" label="Email" margin="normal" />
        <TextField fullWidth variant="outlined" type="password" label="Password" margin="normal" />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Grid2>
      <Grid2 xs={12} md={4} />
    </Grid2>
 
    </div>
  )
}

export default Login