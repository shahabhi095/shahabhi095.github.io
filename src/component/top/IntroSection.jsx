import { selectColor } from "../styles/styles";
import { Link } from "react-scroll";
import "./hero.css";
import Abhinandan_Kumar_Resume from "./Abhinandan_Kumar_Resume.pdf";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
export default function IntroSection() {
const [text, setText] = useState("");
const [fullText, setFullText] = useState("Hi 👋 I'm Developer");
const [index, setIndex] = useState(0);
useEffect(() => {
  if (index < fullText.length) {
    setTimeout(() => {
      setText(text + fullText[index]);
      setIndex(index + 1);
    }, 200);
  }
}, [index]);


  const handleClick = () => {
    window.open(Abhinandan_Kumar_Resume, "_blank", "noreferrer");
    // return <Navigate to={Abhinandan_Kumar_Resume} />;
  };

  return (
    <Box mt={0} pt={11} pb={12} bg={selectColor.Theme2} id="Home">
      <Stack
        pb={15}
        minH={"60vh"}
        spacing={"-1"}
        direction={["column", "column", "column", "row", "row", "row"]}
      >
        <Flex
          pt="6%"
          pb={"6%"}
          flex={1}
          align={"center"}
          justify={"center"}
          pl={3}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"} textAlign="center">
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
                  bg: "#2b6cb0",
                  zIndex: -1,
                }}
              >
                {text}
                {/* Hi 👋 I'm Developer */}
              </Text>
              <br />{" "}
              <Text color={"#2b6cb0"} as={"span"} animation={""}>
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
              <a
                href={Abhinandan_Kumar_Resume}
                download="fw21_1086-Abhinandan-Kumar-Resume"
              >
                {" "}
                <Button
                  onClick={handleClick}
                  rounded={"full"}
                  bg={"#2b6cb0"}
                  color={"white"}
                  _hover={{
                    bg: "#2b6cb0",
                  }}
                >
                  <DownloadIcon /> Resume
                </Button>
              </a>
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1000}
              >
                <Button color={"#2b6cb0"} rounded={"full"}>
                  Contact
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          pt="6%"
          pb={"6%"}
          border={"0px solid red"}
        >
          <Box
            m="0"
            p="0"
            width={"50%"}
            // borderRadius={"30%"}
            borderTopLeftRadius={"20%"}
            borderBottomRightRadius={"20%"}
            boxShadow="-1px -1px 5px 5px #1f08eb"
          >
            <Image
              p={"3%"}
              width="100%"
              overflow={"hidden"}
              borderTopLeftRadius={"20%"}
              borderBottomRightRadius={"20%"}
              // borderRadius={"30%"}
              sizes={{ base: "60%", md: "70%", lg: "70%" }}
              alt={"Login Image"}
              src={abh}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
