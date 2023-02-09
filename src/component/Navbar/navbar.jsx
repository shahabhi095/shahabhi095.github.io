import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import NavbarLogo from "./NavbarLogo";
import Abhinandan_Kumar_Resume from "./Abhinandan_Kumar_Resume.pdf";


const Navbar = () => {
 const handleClick = () => {
   window.open(Abhinandan_Kumar_Resume, "_blank", "noreferrer");
   // return <Navigate to={Abhinandan_Kumar_Resume} />;
 };

  return (
    <Box
      bg={"#2a2f4c"}
      position="sticky"
      top="0"
      zIndex="100"
      boxShadow="rgba(61, 61, 148, 0.25) 0px 6px 12px -2px, rgba(34, 30, 30, 0.3) 0px 3px 7px -3px"
    >
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Link to="Home" spy={true} smooth={true} offset={-40} duration={500}>
          <NavbarLogo />
        </Link>{" "}
        <HStack pr={10} spacing={[6, 8, 10, 12]} fontSize="20px">
          <Box cursor={"pointer"}>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            >
              Home
            </Link>
          </Box>{" "}
          <Box cursor={"pointer"}>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            >
              About
            </Link>
          </Box>
          <Box cursor={"pointer"}>
            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            >
              Skills
            </Link>
          </Box>
          <Box cursor={"pointer"}>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
              cu
            >
              Project
            </Link>
          </Box>
          <Box cursor={"pointer"}>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              textDecoration="none"
            >
              Contact
            </Link>
          </Box>
          <Box cursor={"pointer"}>
            <a href={Abhinandan_Kumar_Resume} download>
              <Button onClick={handleClick} bg={"#f6324b"}>
                Resume
              </Button>
            </a>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
