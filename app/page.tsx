 "use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import image from "next/image";
import Card from "@/components/Card";
import useMediaQuery from "@mui/material/useMediaQuery";


const Home = () => {
  const mobile = useMediaQuery ("(max-width:600px)");
   
  const data = [
    { 
      color: "#E28625",
      image: "/images/icon-sedans.svg", 
      title: "Sedans", 
      description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruisingin the city or on your next road trip."},
    
    { 
      color: "#006971",
      image: "/images/icon-suvs.svg", 
      title: "SUVS", 
      description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."},
    
      { 
        color: "#E00414",
        image: "/images/icon-luxury.svg", 
        title: "LUXURY", 
        description: "Cruise in the best car brands without the bloated prices. Enhanced comfort of a luxury rental and arrive in style."}
  ];
  return (
    <Box sx={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      height: mobile ? "auto" : "98vh",
      flexDirection: mobile ? "column" : "row",
    }} >
      {data.map((card) => {
        return <Card 
          color={card.color} 
          title={card.title} 
          description={card.description} 
          image={card.image} 
          key={card.title}  
      />
      })}
    </Box>
  );
};

export default Home
