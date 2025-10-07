import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Card from "../components/Cards";

const Home = () => {
  return (
    <Box 
    sx={{ backgroundColor: "#141414", display: "flex", justifyContent: "center", alignItems: "center" }}
    className="container">
      <Card/>
    </Box>
  );
}

export default Home;
