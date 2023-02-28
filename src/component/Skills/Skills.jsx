import { SimpleGrid, Heading, Text, Box } from "@chakra-ui/react";
import html5 from "./Skillslogo/newIcons/html5.png";
import css3 from "./Skillslogo/newIcons/css3.png";
import github from "./Skillslogo/newIcons/git.png";
import javascript from "./Skillslogo/newIcons/javascript.png";
import mongodb from "./Skillslogo/newIcons/mongodb.png";
import nodejs from "./Skillslogo/newIcons/nodejs.png";
import react from "./Skillslogo/newIcons/react.png";
import redux from "./Skillslogo/newIcons/redux.png";
import nextjs from "./Skillslogo/newIcons/nextjs.svg";
import typescript from "./Skillslogo/newIcons/typescript.png";
import ChakraUI from "./Skillslogo/newIcons/chakraUI.png";
import Bootstrap from "./Skillslogo/newIcons/bootstrap.png";
import MaterialUI from "./Skillslogo/newIcons/MaterialUI.png";
import express from "./Skillslogo/newIcons/express.png";
import mongooseIcon from "./Skillslogo/newIcons/mongooseIcon.png";
import postman from "./Skillslogo/newIcons/postman.png";
import tailwind from "./Skillslogo/newIcons/tailwind.svg";


import SkillsCard from "./SkillsCard";

const SkillsArray = [
  { src: html5, tag: "HTML" },
  { src: css3, tag: "Css" },
  { src: javascript, tag: "JavaScript" },
  { src: mongodb, tag: "MongoDb" },
  { src: nodejs, tag: "NodeJs" },
  { src: react, tag: "reactJs" },
  { src: redux, tag: "Redux" },
  { src: nextjs, tag: "NextJs" },
  { src: typescript, tag: "TypeScript" },
  { src: ChakraUI, tag: "Chakra UI" },
  { src: Bootstrap, tag: "Bootsrap" },
  { src: express, tag: "Express JS" },
  { src: MaterialUI, tag: "Material UI" },
  { src: mongooseIcon, tag: "Mongoose" },
  { src: postman, tag: "Postman" },
  { src: tailwind, tag: "Tailwind UI" },
  { src: github, tag: "GitHub" },
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
        Tools & Technical Skills
      </Heading>

      <Box m={"auto"} border={"1px solid #2b6cb0"} w={"6%"} mb={3}></Box>
      <Box className="SkillContainer" z-index={1} margin="auto">
        <SimpleGrid columns={[2,3,4,6]}>
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
