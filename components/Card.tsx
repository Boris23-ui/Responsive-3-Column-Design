import Box from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
    color: string;
    image: string;
    title: string;
    description: string;
}

const Card = ({ color, image, title, description }: Props) => {
  return (
    <Box 
      sx={{ 
        maxheight: "31.25rem", 
        maxwidth: "18.75rem", 
        backgroundColor: color, 
        padding: "3rem"  
        }}  
        >
      <Image src={image} alt={title} height={40} width={64} />
      <Typography 
        sx={{ 
            color: "#FFFFFF", 
            textTransform: "uppercase", 
            fontSize: "2.5rem",
            fontWeight: 600,
             margin: "2rem auto"
            }}
            >
            {title}
      </Typography>
      <Typography  
        sx={{ 
            color: "#FFFFFF", 
            lineHeight: "2rem", 
            maxWidth: "12rem",
            fontSize: "0.9375rem"
            }} 
            >
                {description}
      </Typography>
      <Button 
        sx={{ 
            color: color, 
            backgroundColor: "#FFFFFF",
            borderRadius: "1.5625rem",
            padding: "0.75rem 2rem ",
            marginTop: "8rem"
            }} 
            >
                Learn More
      </Button>
    </Box>
  )
}

export default Card;