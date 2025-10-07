import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import CustomLink from './CustomLink';

const links = [
  { linkTitle: "GitHub", link: "https://github.com/simonecontidev" },
  { linkTitle: "Codepen", link: "https://codepen.io/simonecontidev" },
  { linkTitle: "LinkedIn", link: "https://www.linkedin.com/in/simonecontidev/" },
  { linkTitle: "Mail", link: "mailto:simonecontisid@gmail.com" }
];

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
        style={{ borderRadius: "50%", marginBottom: "1,5rem" }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: "2.25rem", fontWeight: 700, color: "#FFFFFF", marginTop: "1rem", marginBottom: "0.5rem" }}
      >
        Simone Conti
      </Typography>
      <Typography
        variant="h2"
        className="neon"
        sx={{ fontSize: "1.3125rem", marginTop: "0.5rem",  marginBottom: "1.5rem"  }}
      >
        Barcelona, Spain
      </Typography>
      <Typography sx={{ fontSize: "1rem", marginTop: "0.5rem", marginBottom: "1.5rem"  }}>
        Front-end Developer blending code with creative interaction
      </Typography>

      {links.map((item) => (
        <CustomLink key={item.linkTitle} linkData={item} />
      ))}
    </Box>
  );
};

export default Card;