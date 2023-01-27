import { Box, Button, Flex, HStack} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-scroll"
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
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
          {" "}
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
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            textDecoration="none"
          >
            Project
          </Link>
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
          <Link>
            <Button bg={"#f6324b"}>Resume</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
