 import { selectColor } from "../styles/styles";
// import "./hero.css"
import abh from "./abh.jpg"
import { DownloadIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Box mt={0} pt={0} bg={selectColor.Theme2} pb={2}>
    <Stack minH={'100vh'} spacing={"-1"} direction={{ base: 'column', md: 'row' }}>
      <Flex   flex={1}  align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
                bg: '#f6324b',
                zIndex: -1,
              }}>
           Hi 👋 I'm Developer
            </Text>
            <br />{' '}
            <Text color={'#f6324b'} as={'span'}>
             Abhinandan Kumar
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} align={"center"} justify={"center"} spacing={4}>
          <Link href="https://drive.google.com/file/d/1VGTPkPt5MM0tC34XWPv54MbkIU0fIs5T/view?usp=sharing">  <Button
              rounded={'full'}
              bg={'#f6324b'}
              color={'white'}
              _hover={{
                bg: '#f6324b',
              }}>
             <DownloadIcon/>{" "} Resume
            </Button></Link>
            <Button color={'#f6324b'} rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
       
         p={"20%"}
      minH={"-moz-min-content"}
        sizes={{base:"60%",md:"50%", lg:"50%"}}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            abh
          }
        />
      </Flex>
    </Stack>
    </Box>
  );
}

















// export default function SplitScreen() {
//   return (
//    <div className="container">
    
//     <div className="topbody">
//       <div className="topbodyleft">
//         <div className="topicon"></div>
//         <div className="heading">
//           <h1>I am Abhinandan Kumar</h1>
//           </div>
//         <div className="description"></div>
//         <div className="btn"></div>
//       </div>
//       <div className="topbodyright">hello</div>
//     </div>
//    </div>
//   );
// }