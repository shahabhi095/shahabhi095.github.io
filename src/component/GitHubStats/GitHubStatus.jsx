import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
const GitHubStatus = () => {
  return (
    <Box mb={6} p={6} bg="#1f2235">
      <Box textAlign={"center"}>
        <Text color={"#f6324b"}>MY GITHUB</Text>
        <Heading fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}>
          Calender & Stats
        </Heading>
        <Box m={"auto"} border={"2px solid #f6324b"} w={"10%"} mt={3}></Box>
      </Box>
      <br />
      <Flex justifyContent={"center"} pb={6} pt={6}>
        <GitHubCalendar username="shahabhi095" blockSize={16} fontSize={16} />
      </Flex>
      <Flex justifyContent={"center"} pb={6} pt={6}>
        <Image src="https://github-readme-streak-stats.herokuapp.com/?user=shahabhi095&theme=tokyonight&background=1a1b27"></Image>
      </Flex>
      <Flex justifyContent={"center"} pb={6} pt={6}>
        <Image src="https://github-readme-stats.vercel.app/api?username=shahabhi095&theme=tokyonight&show_icons=true"></Image>
      </Flex>
    </Box>
  );
};
export default GitHubStatus;
