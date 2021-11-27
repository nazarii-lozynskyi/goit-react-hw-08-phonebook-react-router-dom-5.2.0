import * as React from 'react';

import {
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  IconButton,
  TextField,
  Button,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginPage() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',

        width: 'fit-content',
        margin: '0 auto',
        padding: '20px',
        marginTop: '40px',
        border: 1,
        borderColor: 'primary.main',
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <InputLabel required htmlFor="outlined-adornment-password">
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <Button variant="outlined">Login</Button>
      </FormControl>
    </Box>
  );
}

export default LoginPage;
