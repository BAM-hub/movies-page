import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Button, Typography } from "@mui/material";
import AppLogo from "/public/movie logo by BAM.svg";

function Login() {
  return (
    <Grid2 container spacing={4} padding={2} margin={0}>
      <Grid2
        item
        xs={12}
        sm={10}
        margin='auto'
        display='flex'
        justifyContent='center'
      >
        <img src={AppLogo} alt='' />
      </Grid2>
      <Grid2
        item
        lg={6}
        xs={10}
        sm={8}
        margin='auto'
        bgcolor='white'
        borderRadius={5}
        position='relative'
      >
        <Typography
          variant='h3'
          align='center'
          margin={2}
          color='primary.light'
        >
          Login
        </Typography>

        <Grid2 item xs={12} sm={10} margin='auto'>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            fullWidth
            type='email'
            color='secondary'
          />
        </Grid2>
        <Grid2 item xs={12} sm={10} margin='auto'>
          <TextField
            inputProps={{ style: { border: "red" } }}
            id='outlined-basic'
            label='password'
            variant='outlined'
            fullWidth
            type='password'
            color='secondary'
          />
        </Grid2>
        <Grid2
          item
          xs={12}
          sm={10}
          margin='auto'
          display='flex'
          justifyContent='center'
        >
          <Button color={"secondary"} variant='outlined'>
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

export default Login;
