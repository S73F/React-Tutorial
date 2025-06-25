import {
  Button,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink } from "react-router";
import type { UserData } from "../types";
import { useRegister } from "../hooks/useRegister";

export const Registrazione = () => {
  const [data, setData] = useState<UserData>({ username: "", password: "" });
  const { registerApi, loading } = useRegister();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    registerApi(data);
  };

  return (
    <Stack
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundImage: `url(https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Paper
        sx={{
          width: "20%",
          height: "50%",
          bgcolor: "ivory",
          border: "2px solid black",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={10}
      >
        <Typography variant="h4" mb={5}>
          Registrazione
        </Typography>

        <Stack width={"70%"}>
          <FormLabel>Nome utente</FormLabel>
          <TextField name="username" onChange={handleChange} />
        </Stack>

        <Stack width={"70%"} mt={4} mb={3}>
          <FormLabel>Password</FormLabel>
          <TextField name="password" onChange={handleChange} />
        </Stack>

        <Button size="large" onClick={handleSubmit}>
          Registrati
        </Button>

        <Typography mt={3}>
          Hai già un account? <NavLink to={"/"}>Effettua il login</NavLink>
        </Typography>
      </Paper>
    </Stack>
  );
};
