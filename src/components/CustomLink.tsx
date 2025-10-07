import Box from '@mui/material/Box';
import React from 'react';
import Link from 'next/link';

interface LinkProps {
  linkData: { linkTitle: string; link: string;};
}

const CustomLink = ({ linkData }: LinkProps) => {
  return <Box className="linkBackground" sx={{ padding: "0.75rem 5.625rem"}}> 
  <Link href={linkData.link} target="_blank">
  {linkData.linkTitle}  
  </Link>
 </Box>
}

export default CustomLink
