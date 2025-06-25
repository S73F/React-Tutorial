import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { height } from "../styles";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box minHeight={height} bgcolor={"#c5c6c7"}>
        <Outlet />
      </Box>
    </>
  );
};
