import { useState } from "react";
import { useDispatch } from "react-redux";

import { authOperations } from "../../redux/auth";

import { Box, FormControl, TextField, Button } from "@mui/material";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("alert");
      return;
    }

    dispatch(authOperations.logIn({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",

          width: "fit-content",
          margin: "0 auto",
          padding: "20px",
          marginTop: "40px",
          border: 1,
          borderColor: "primary.main",
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
          <TextField
            onChange={handleChange}
            required
            id="outlined-required"
            name="email"
            label="Email"
            value={email}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
          <TextField
            onChange={handleChange}
            required
            id="password"
            name="password"
            label="Password"
            value={password}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
          <Button type="submit" variant="outlined">
            Login
          </Button>
        </FormControl>
      </Box>
    </form>
  );
}

export default LoginPage;
