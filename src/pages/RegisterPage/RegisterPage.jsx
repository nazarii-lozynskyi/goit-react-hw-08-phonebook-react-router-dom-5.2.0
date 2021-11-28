import { useState } from "react";
import { useDispatch } from "react-redux";

import { authOperations } from "../../redux/auth";

import { Box, TextField, Button, FormControl } from "@mui/material";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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

    if (name === "" || email === "" || password === "") {
      console.log("alert");
      return;
    }

    dispatch(authOperations.register({ name, email, password }));

    setName("");
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
            id="input-Name"
            label="Name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </FormControl>

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
            Registration
          </Button>
        </FormControl>
      </Box>
    </form>
  );
}

export default RegisterPage;
