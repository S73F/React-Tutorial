import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router";

export const Login = () => {
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
          <Typography>Nome utente</Typography>
          <TextField />
        </Stack>

        <Stack width={"70%"} mt={4} mb={3}>
          <Typography>Password</Typography>
          <TextField />
        </Stack>

        <Button size="large">Login</Button>

        <Typography mt={3}>
          Non hai un account? <NavLink to={""}>Registrati</NavLink>
        </Typography>
      </Paper>
    </Stack>
  );
};
