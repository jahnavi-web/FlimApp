import React, { useState } from "react";
import { Button, Grid2, TextField } from "@mui/material";

const AddMovies = () => {
   

  return (
    <div>
      <Grid2 container spacing={2} justifyContent="center">
        <Grid2 item xs={12} md={4} />
        <Grid2 item xs={12} md={4}>
          <TextField fullWidth variant="outlined" label="Movie Name" />
          <TextField fullWidth variant="outlined" label="Year" />
          <TextField fullWidth variant="outlined" label="Genre" />
          <TextField fullWidth variant="outlined" label="Rating" />
          <label>Upload Image</label><br/>
          <input type="file" accept="image/*" style={{ marginTop: "16px" }}/>
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Add Movie
          </Button>
        </Grid2>
        <Grid2 item xs={12} md={4} />
      </Grid2>
    </div>
  );
};

export default AddMovies;