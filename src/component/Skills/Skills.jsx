import { SimpleGrid ,Heading, Text,Box} from "@chakra-ui/react"
import "./Skills.css"
import css3 from "./Skillslogo/css3.png"
import github from "./Skillslogo/github.png"
import javascript from "./Skillslogo/javascript.png"
import mongodb from "./Skillslogo/mongodb.png"
import nodejs from "./Skillslogo/nodejs.png"
import react from "./Skillslogo/react.png"
import redux from "./Skillslogo/redux.png"
import typescript from "./Skillslogo/typescript.png"
// import ChakraUI from "./Skillslogo/ChakraUI.png"
// import Bootstrap from "./Skillslogo/Bootstrap.png"
// import MaterialUI from "./Skillslogo/MaterialUI.png"
// import Nextjs from "./Skillslogo/Nextjs.png"



import SkillsCard from "./SkillsCard"




const SkillsArray = [
  {src:css3, tag:"Css"},
  {src:github, tag:"GitHub"},
  {src:javascript, tag:"JavaScript"},
  {src:mongodb, tag:"MongoDb"},
  {src:nodejs, tag:"NodeJs"},
  {src:react, tag:"reactJs"},
  {src:redux, tag:"Redux"},
  {src:typescript, tag:"TypeScript"},
  // {src:ChakraUI, tag:"Chakra UI"},
  // {src:Bootstrap, tag:"Bootsrap"},
  // {src:Nextjs, tag:"Next JS"},
  // {src:MaterialUI, tag:"Material UI"},
]


const Skills = () => {
  return (
    <div style={{backgroundColor:"#1f2235"}}>
       <Heading fontSize={'2xl'} pt={8} fontFamily={'body'} fontWeight={500}>
           Skills
          </Heading>

           <Text color={'white'} fontSize={'sm'} >
            What I know
          </Text>
          <Box m={"auto"} border={"1px solid #f6324b"} w={"6%"}></Box>
    <div className="SkillContainer">
      
      <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg:3 }} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {SkillsArray.map((el, i)=><SkillsCard  key={i} IMAGE = {el.src} tag={el.tag}/>)}

</SimpleGrid>
    </div>
    </div>
  )
}
export default Skills

