import { Box, Button, Flex, HStack, Spacer, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import NavbarLogo from "./NavbarLogo";
import Abhinandan_Kumar_Resume from "./Abhinandan_Kumar_Resume.pdf";
import NavbarDrawer from "./NavbarDrawer";




const Navbar = () => {
 //const { isOpen, onToggle } = useDisclosure();
const { isOpen, onOpen, onClose } = useDisclosure();
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
        </Link>
        {isOpen?<Spacer />:null}
        <HStack
          pr={10}
          spacing={[6, 8, 10, 10]}
          display={{ sm: "none", base: "none", md: "none", lg: "flex" }}
          fontSize="20px"
        >
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
              About me
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
        </HStack>
        <Box cursor={"pointer"} pr={4}>
          <a href={Abhinandan_Kumar_Resume} download>
            <Button onClick={handleClick} bg={"#2b6cb0"} fontSize={["24px","20px", "16px"]}>
              Resume
            </Button>
          </a>
        </Box>
        <NavbarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};

export default Navbar;
