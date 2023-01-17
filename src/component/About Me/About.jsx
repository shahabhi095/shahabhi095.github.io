import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
// import Carousel from './crousel';

export default function About() {
  return (
    <Box bg={"#23263a"}>
      <br/>
       <br/>
      <Stack w={"50%"} m={"auto"} align={"center"} justifyContent={"center"}>
         <Heading fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}>
            <Text color={'white'} as={'span'}>
             About Me
            </Text>{' '}
          </Heading>
         <Box mt={"2%"} border={"1px solid #f6324b"} w={"10%"}></Box>
      </Stack>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
 <Flex flex={1} align={'center'} justify={'center'}>
       <Image
       
         p={"20%"}
        sizes={"60%"}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
           "https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          }
        />
      </Flex>


      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
             Abhinandan Kumar
            </Text>
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
           A passionate Full Stack Web Developer with proficiency in javascript, ReactJs,
            ExpressJs, NodeJs, Data Structures, and Algorithms. Has 1200+ hours of coding experience. Is an Adaptable team player
            who is goal-oriented and solutions-focused. Looking forward to utilizing his skillset and experience in creating a mark
            in the software industry and achieving organizational goals.
          </Text>
        </Stack>
      </Flex>
     
    </Stack>
    </Box>
  );
}