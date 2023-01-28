import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Abhinandan from "./Abhinandan.png"
const NavbarLogo = () => {
  return (
    <Box pl={3} width="100px">
      <Image
      cursor={"pointer"}
        src={Abhinandan}
        borderRadius={"50%"}
        overflow="hidden"
        width={"60px"}
        p="5px"
        h={"60px"}
      ></Image>
    </Box>
  );
}

export default NavbarLogo
