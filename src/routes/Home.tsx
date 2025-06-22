import { Stack, Typography } from "@mui/material";
import { height } from "../styles";

export const Home = () => {
  return (
    <Stack justifyContent={"center"} textAlign={"center"} height={height}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the React + TypeScript + MUI template!
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        This template is designed to help you get started quickly with a modern
        React application using TypeScript and Material-UI.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Explore the code, customize it to your needs, and build something great!
      </Typography>
    </Stack>
  );
};
