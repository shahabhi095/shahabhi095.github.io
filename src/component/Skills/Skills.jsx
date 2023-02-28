import { SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";
import "./Skills.css";
import css3 from "./Skillslogo/css3.png";
import github from "./Skillslogo/github.png";
import javascript from "./Skillslogo/javascript.png";
import mongodb from "./Skillslogo/mongodb.png";
import nodejs from "./Skillslogo/nodejs.png";
import react from "./Skillslogo/react.png";
import redux from "./Skillslogo/redux.png";
import typescript from "./Skillslogo/typescript.png";
// import ChakraUI from "./Skillslogo/ChakraUI.png"
// import Bootstrap from "./Skillslogo/Bootstrap.png"
// import MaterialUI from "./Skillslogo/MaterialUI.png"
// import Nextjs from "./Skillslogo/Nextjs.png"

import SkillsCard from "./SkillsCard";

const SkillsArray = [
  { src: css3, tag: "Css" },
  { src: github, tag: "GitHub" },
  { src: javascript, tag: "JavaScript" },
  { src: mongodb, tag: "MongoDb" },
  { src: nodejs, tag: "NodeJs" },
  { src: react, tag: "reactJs" },
  { src: redux, tag: "Redux" },
  { src: typescript, tag: "TypeScript" },
  // {src:ChakraUI, tag:"Chakra UI"},
  // {src:Bootstrap, tag:"Bootsrap"},
  // {src:Nextjs, tag:"Next JS"},
  // {src:MaterialUI, tag:"Material UI"},
];

const Skills = () => {
  return (
    <Box style={{ backgroundColor: "#1f2235" }} pt={10} id="Skills">
      <Text color={" #2b6cb0"} fontSize={"lg"} textAlign="center">
        What I know ?
      </Text>
      <Heading
        fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
        textAlign="center"
      >
        Technical Skills
      </Heading>

      <Box m={"auto"} border={"1px solid #2b6cb0"} w={"6%"} mb={3}></Box>
      <Box className="SkillContainer" z-index={1} width="80%" margin="auto">
        <SimpleGrid
          // spacing={[6, 6, 5, 5, 4]}
          // templateColumns={{
          //   base: "repeat(1,1fr)",
          //   sm: "repeat(1,1fr)",
          //   md: "repeat(3,1fr)",
          //   xl: "repeat(4,1fr)",

          // }}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        >
          {SkillsArray.map((el, i) => (
            <Box m={1} key={i}>
              <SkillsCard IMAGE={el.src} tag={el.tag} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Skills;
