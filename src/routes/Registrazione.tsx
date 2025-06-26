import {
  Button,
  CircularProgress,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useNavigate } from "react-router";
import type { UserData } from "../types";
import { useRegister } from "../hooks/useRegister";
import { loginFormContainer, loginPageContainer } from "../styles";

export const Registrazione = () => {
  const [data, setData] = useState<UserData>({ username: "", password: "" });
  const { registerApi, loading } = useRegister();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) navigate("/home");
  }, [token, navigate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    registerApi(data);
  };

  return (
    <Stack sx={loginPageContainer}>
      <Paper sx={loginFormContainer} elevation={10}>
        <Typography variant="h4" mb={{ xs: 2, sm: 3, md: 4 }}>
          Registrazione
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack>
            <Stack>
              <FormLabel>Nome utente</FormLabel>
              <TextField type="text" name="username" onChange={handleChange} />
            </Stack>

            <Stack mt={{ xs: 2, sm: 3, md: 4 }} mb={{ xs: 2, sm: 3, md: 4 }}>
              <FormLabel>Password</FormLabel>
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
              />
            </Stack>

            {!loading ? (
              <Button type="submit" size="large" onClick={handleSubmit}>
                Registrati
              </Button>
            ) : (
              <CircularProgress sx={{ alignSelf: "center" }} />
            )}
          </Stack>
        </form>

        <Typography mt={{ xs: 2, sm: 3 }}>
          Hai già un account? <NavLink to={"/"}>Effettua il login</NavLink>
        </Typography>
      </Paper>
    </Stack>
  );
};
