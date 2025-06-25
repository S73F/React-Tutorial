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
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [data, setData] = useState<UserData>({ username: "", password: "" });
  const { loginApi, loading } = useLogin();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    loginApi(data);
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
          Login
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
          Login
        </Button>

        <Typography mt={3}>
          Non hai un account? <NavLink to={""}>Registrati</NavLink>
        </Typography>
      </Paper>
    </Stack>
  );
};
