// import logo from './logo.svg';
import "./App.css";

import About from "./component/About Me/About";
import IntroSection from "./component/top/IntroSection";
import { selectColor } from "./component/styles/styles";
import Skills from "./component/Skills/Skills";
import SimpleThreeColumns from "./component/Projects/Projects";
import Navbar from "./component/Navbar/navbar";
import ContactMe from "./component/Contact/ContactMe";
import { Box } from "@chakra-ui/react";
import GitHubStatus from "./component/GitHubStats/GitHubStatus";

function App() {
  return (
    <Box className="App" bg={selectColor.Theme1} color="white">
      
      <Box className="box_shado">
        <Navbar />

        <IntroSection />
        <About />
        <Skills />
        <SimpleThreeColumns />
        <GitHubStatus />
        <ContactMe />
      </Box>
    </Box>
  );
}

export default App;
