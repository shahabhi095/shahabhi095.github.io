
import { Box, SimpleGrid, Text, Stack,Heading} from '@chakra-ui/react';
import shine from "./projectImage/shine.jpg"
import SkinStore from "./projectImage/SkinStore.jpg"
import chargebee from "./projectImage/chagebee.jpg"
import bigbasket from "./projectImage/bigbasket.jpg";

import ProjectsCard from './ProjectsCard';
const ProjectsDetails = [
  {
    IMAGE: shine,
    NAME: "shine.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript"],
    DISCRIPTION:
      "This is the clone of Shine.com which is an online job portal & that also offers many courses for skills development.",
    GITHUB: "https://github.com/shahabhi095/glad-sail-5635",
    DEPLOY: "https://cheery-moonbeam-c4a548.netlify.app/",
  },
  {
    IMAGE: SkinStore,
    NAME: "SkinStore.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript"],
    DISCRIPTION:
      "This is the clone of SkinStore.com which is an E-commerce Website which sells skincare and luxury spa products",
    GITHUB: "https://github.com/shahabhi095/likely-cough-9107",
    DEPLOY: "https://beamish-cascaron-4c17b9.netlify.app/",
  },
  {
    IMAGE: chargebee,
    NAME: "chargebee.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript", "ReactJs", "CkakraUi"],
    DISCRIPTION:
      "This is the clone of Chargebee which provides all type of business solutions to different companies",
    GITHUB:
      "https://github.com/shahabhi095/ideal-carpenter-6870/tree/main/ideal-carpenter-6870",
    DEPLOY: "https://radiant-twilight-79cabf.netlify.app/",
  },
  {
    IMAGE: bigbasket,
    NAME: "bigbasket.com (Clone)",
    TECHSTACK: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "CkakraUi"],
    DISCRIPTION:
      "This is the clone of Bigbasket which is an India’s largest online food and grocery store.",
    GITHUB: "https://github.com/alih6051/placid-plane-2533",
    DEPLOY: "https://placid-plane-2533.vercel.app/",
  },
];


export default function SimpleThreeColumns() {
  return (
    <Box p={4} id="Projects">
      <br />

      <Stack w={"50%"} m={"auto"} align={"center"} justifyContent={"center"}>
        <Text color={"#f6324b"}>MY WORK</Text>
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
          Creative Projects
        </Heading>
        <Box mt={"5%"} border={"1px solid #f6324b"} w={"10%"}></Box>
      </Stack>
      <br />
      <br />
      <br />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {ProjectsDetails.map((item, i) => (
          <ProjectsCard
            id={i}
            IMAGE={item.IMAGE}
            NAME={item.NAME}
            TECHSTACK={item.TECHSTACK}
            DISCRIPTION={item.DISCRIPTION}
            GITHUB={item.GITHUB}
            DEPLOY={item.DEPLOY}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}