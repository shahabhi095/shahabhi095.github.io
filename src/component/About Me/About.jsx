import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// import Carousel from './crousel';

export default function About() {
  return (
    <Box bg={"#23263a"} id={"About"}>
      <br />
      <br />
      <Stack
        w={"50%"}
        m={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={" #2b6cb0"}>WHO AM I ?</Text>
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
          About Me
        </Heading>
        <Box mt={"2%"} border={"1px solid #2b6cb0"} w={"15%"}></Box>
      </Stack>
      <Stack
        minH={"50vh"}
        direction={["column", "column", "column", "row", "row", "row"]}
      >
        <Flex
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          pt="6%"
          pb={"6%"}
        >
          <Box m="0" p="0">
            <Image
              sizes={"60%"}
              alt={"Login Image"}
              objectFit={"cover"}
              src={
                "https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              }
            />
          </Box>
        </Flex>

        <Flex
          p={8}
          flex={1}
          justifyContent={{ base: "center", md: "center", lg: "left" }}
          alignItems={{ base: "center", md: "center", lg: "left" }}
          pt="6%"
          pb={"6%"}
        >
          <Box>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                textAlign={"left"}
                color="#2b6cb0"
              >
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
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Abhinandan Kumar
                </Text>
                <br />{" "}
              </Heading>
              <Text
                fontSize={["22px", "3xl", "lg"]}
                color={"white"}
                textAlign={{ base: "center", md: "left" }}
              >
                A passionate Full Stack Web Developer with proficiency in
                javascript, ReactJs, ExpressJs, NodeJs, Data Structures, and
                Algorithms. Has 1200+ hours of coding experience. Is an
                Adaptable team player who is goal-oriented and
                solutions-focused. Looking forward to utilizing his skillset and
                experience in creating a mark in the software industry and
                achieving organizational goals.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
