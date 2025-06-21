import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        height={{
          xs: "calc(100vh - 56px)",
          sm: "calc(100vh - 64px)",
          md: "calc(100vh - 68.5px)",
        }}
        padding={3}
      >
        <Outlet />
      </Box>
    </>
  );
};
