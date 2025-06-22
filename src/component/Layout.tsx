import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box bgcolor={"#c5c6c7"}>
        <Outlet />
      </Box>
    </>
  );
};
