import { Stack } from "@mui/material";

export const Home = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height={{
        xs: "calc(100vh - 56px)",
        sm: "calc(100vh - 64px)",
        md: "calc(100vh - 68.5px)",
      }}
    ></Stack>
  );
};
