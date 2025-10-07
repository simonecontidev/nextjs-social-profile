import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const Card = () => {
  return (
    <Box
      className="cardBackground"
      sx={{
        padding: "2rem",
        borderRadius: "0.75rem",
        textAlign: "center",
      }}
    >
      <Image
        src="/assets/images/portrait.jpg"
        alt="Portrait"
        width={88}
        height={88}
        style={{ borderRadius: "50%" }}
      />
      <Typography variant="h1" sx={{ fontSize:"2.25rem", fontWeight: 700, color: "#FFFFFF", marginTop: "1rem" }}>
        Simone Conti
      </Typography>
      <Typography variant="h2" className="neon" sx={{ fontSize: "1.3125rem", marginTop: "0.5rem"}}>
        Barcelona, Spain
      </Typography>
      <Typography sx={{ fontSize: "1rem", marginTop: "0.5rem"}}>Front-end Developer, blend code with creative interaction
      </Typography>
    </Box>
  );
};

export default Card;