import Box from '@mui/material/Box';
import React from 'react';
import Link from 'next/link';

interface LinkProps {
  linkData: { linkTitle: string; link: string;};
}

const CustomLink = ({ linkData }: LinkProps) => {
  return <Box className="linkBackground" sx={{ padding: "0.75rem 5.625rem", width: "300", borderRadius: "0.5rem", marginBottom: "1rem", backgroundColor: "#000", color: "#fff", cursor: "pointer", "&:hover": { backgroundColor: "#333333" } }}> 
  <Link href={linkData.link} target="_blank" 
  style={{ textDecoration: "none", color: "#fff", fontWeight: 500, textTransform: "uppercase", fontFamily: "Arial, sans-serif" }}>
  {linkData.linkTitle}  
  </Link>
 </Box>
}

export default CustomLink
