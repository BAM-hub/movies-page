import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { TextField, Button, Typography } from "@mui/material";
import AppLogo from "/public/movie logo by BAM.svg";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { getMovies } from "../actions/movies";
import validateUser from "../utils/validateUser";
import { emailError, passwordError } from "../constants";

const Login = ({ auth: { isAuthenticated }, getMovies, login }) => {
  const [errors, setErrors] = useState([emailError, passwordError]);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
    isAuthenticated: false,
  });

  const handleSubmit = () => {
    // fetching here to avoid the user having to wait for the movies to load
    // and avoid binding to the DOM renders
    getMovies();
    login(user);
  };

  const handleChange = (e) => {
    // this is done to avoid setState being sort of async
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
    const errors = validateUser(newUser);
    if (errors.isFormValid) setSubmitDisabled(false);
    setErrors(Array.from(errors.errors));
  };

  if (isAuthenticated) {
    return <Navigate to='/popular' />;
  }

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
        <img src={AppLogo} alt='' height={150} />
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
            name='email'
            id='outlined-basic'
            label='Email'
            variant='outlined'
            fullWidth
            type='email'
            error={errors.includes(emailError)}
            helperText={errors.includes(emailError) && emailError}
            color='secondary'
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item xs={12} sm={10} margin='auto'>
          <TextField
            name='password'
            inputProps={{ style: { border: "red" } }}
            id='outlined-basic'
            label='password'
            variant='outlined'
            fullWidth
            type='password'
            error={errors.includes(passwordError)}
            helperText={errors.includes(passwordError) && passwordError}
            color='secondary'
            onChange={handleChange}
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
          <Button
            color={"secondary"}
            variant='outlined'
            onClick={handleSubmit}
            disabled={submitDisabled}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, getMovies })(Login);
