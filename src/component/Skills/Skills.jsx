import React from 'react';
import {
  Box,
  Stack,
  Container,
  Text
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import github from "./Skillslogo/github.png"
import react from "./Skillslogo/react.png"
import mongodb from "./Skillslogo/mongodb.png"
import nodejs from "./Skillslogo/nodejs.png"
import redux from "./Skillslogo/redux.png"
import typescript from "./Skillslogo/typescript.png"
import css3 from "./Skillslogo/typescript.png"
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
 

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes


  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
       nodejs
    },
    {
      image:
       redux
    },
    {
      image:
        mongodb
    },
    {
      image:
       react
    },
    {
      image:
      github
    },
     {
      image:
       typescript
    },
    {
      image:
     css3
    },
  ];

  return (
    <Box   bg={"#1f2235"}>
      <Text>These are the Tools I have worked with</Text>
    <Box
      position={'relative'}
   
      width={"20%"}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
     
      {/* Slider */}
      <Slider {...settings} >
        {cards.map((card, index) => (
          <Box
            key={index}
           
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="200px" position="relative">
              <Stack
                spacing={6}
               
                
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    
    </Box>
  
  );
}