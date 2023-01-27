import { selectColor } from "../styles/styles";
// import "./hero.css"
import abh from "./abh.jpg";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useBreakpointValue,
 
} from "@chakra-ui/react";
// import Abhinandan_Kumar_Resume from "./Abhinandan_Kumar_Resume.pdf";
export default function IntroSection() {
  return (
    <Box mt={0} pt={11} pb={12} bg={selectColor.Theme2}  id="Home">
      <Stack
        pb={15}
        minH={"60vh"}
        spacing={"-1"}
        direction={["column", "column", "column", "row", "row", "row"]}
      >
        <Flex pt="6%" pb={"6%"} flex={1} align={"center"} justify={"center"} pl={3} >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "#f6324b",
                  zIndex: -1,
                }}
              >
                Hi 👋 I'm Developer
              </Text>
              <br />{" "}
              <Text color={"#f6324b"} as={"span"}>
                Abhinandan Kumar
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "xl", lg: "lg", md: "lg" }}
              color={"white.500"}
            >
              I love to make projects which are helpful for masses and serve as
              a great helpful entity.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              align={"center"}
              justifyContent={"center"}
              spacing={6}
            >
              <Link
                textDecoration={"none"}
                href="./Abhinandan_Kumar_Resume.pdf"
                download={"Abhinandan_Kumar_Resume"}
              >
                {" "}
                <Button
                  rounded={"full"}
                  bg={"#f6324b"}
                  color={"white"}
                  _hover={{
                    bg: "#f6324b",
                  }}
                >
                  <DownloadIcon /> Resume
                </Button>
              </Link>
              <Button color={"#f6324b"} rounded={"full"}>
                Contact
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          pt="6%"
          pb={"6%"}
        >
          <Box
            m="0"
            p="0"
            borderRadius={"50%"}
            boxShadow="-1px -1px 5px 5px #1f08eb"
          >
            <Image
              width="100%"
              overflow={"hidden"}
              borderRadius={"50%"}
              sizes={{ base: "60%", md: "50%", lg: "50%" }}
              alt={"Login Image"}
              src={abh}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}


