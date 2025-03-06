import React from 'react'
import { Button, Grid2, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'

const SignUp = () => {
  return (
    <div>
      <Grid2 container spacing={2} justifyContent="center">
      <Grid2 xs={12} md={4} />
      <Grid2 xs={12} md={4}>
        <TextField fullWidth variant="outlined" label="Full Name"/>
        <TextField fullWidth variant="outlined" label="Phone"/>
        <TextField fullWidth variant="outlined" type="email" label="Email"/>
        <TextField fullWidth variant="outlined" type="password" label="Password"/>
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Grid2>
      <Grid2 xs={12} md={4} />
    </Grid2>
    </div>
  )
}

export default SignUp