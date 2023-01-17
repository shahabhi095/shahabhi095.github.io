
import { Box, SimpleGrid, Text, Stack,Heading} from '@chakra-ui/react';
import shine from "./projectImage/shine.jpg"
import SkinStore from "./projectImage/SkinStore.jpg"
import chargebee from "./projectImage/chagebee.jpg"
import ProductSimple from './ProjectsCard';
const ProjectsDetails=[
    {
      IMAGE:shine, 
      NAME:"shine.com (Clone)",
      TECHSTACK:[ "HTML" , "CSS", "JavaScript" ], 
      DISCRIPTION:"Shine.com is an online job portal & that also offers many courses for skills development.",
      GITHUB:"https://github.com/shahabhi095/glad-sail-5635",
      DEPLOY:"https://cheery-moonbeam-c4a548.netlify.app/"
    },
    {
      IMAGE:SkinStore, 
      NAME:"SkinStore.com (Clone)",
      TECHSTACK:[ "HTML" , "CSS", "JavaScript" ], 
      DISCRIPTION:"SkinStore.com is an E-commerce Website which sells skincare and luxury spa products",
      GITHUB:"https://github.com/shahabhi095/likely-cough-9107",
      DEPLOY:"https://beamish-cascaron-4c17b9.netlify.app/"
    },
    {
      IMAGE:chargebee, 
      NAME:"chargebee.com (Clone)",
      TECHSTACK:[ "HTML" , "CSS", "JavaScript", "ReactJs", "CkakraUi" ], 
      DISCRIPTION:"Chargebee provides all type of business solutions to different companies",
      GITHUB:"https://github.com/shahabhi095/ideal-carpenter-6870/tree/main/ideal-carpenter-6870",
      DEPLOY:"https://radiant-twilight-79cabf.netlify.app/"
    }
]


export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
         <br/>
       <br/>
      <Stack w={"50%"} m={"auto"} align={"center"} justifyContent={"center"}>
         <Heading fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}>
            <Text color={'white'} as={'span'}>
             My Projects
            </Text>{' '}
          </Heading>
         <Box mt={"5%"} border={"1px solid #f6324b"} w={"10%"}></Box>
      </Stack>
      <br /><br /><br />
      <SimpleGrid columns={{ base: 1, md: 2, lg:3 }} spacing={5}>
        {ProjectsDetails.map((item,i)=>( 
        <ProductSimple 
        id={i} 
        IMAGE={item.IMAGE}
        NAME={item.NAME}
        TECHSTACK={item.TECHSTACK}
        DISCRIPTION={item.DISCRIPTION}
        GITHUB={item.GITHUB}
        DEPLOY={item.DEPLOY}
        />)
        )}
      </SimpleGrid>
    </Box>
  );
}