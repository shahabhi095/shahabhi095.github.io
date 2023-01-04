import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import abh from "./abh.jpg"
export default function SplitScreen() {
  return (
    <Stack maxH={'60vh'} direction={{ base: 'column', md: 'row' }}  >
      <Flex p={8} flex={1} align={'center'} justify={'center'} minW={'md'} bg="#9C4A14">
        <Stack spacing={6} w={'full'} maxW={'md'}>
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
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row'}}  align={'center'} justify={'center'} spacing={5}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={'center'} justify={'center'}  mainW={'md'}  maxH={'60vh'}   boxSize='100%'  bg= '#601F3E'>
        <Image

         borderRadius='full'
        boxSize='50%'
         p={10}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
abh          }
        />
      </Flex>
    </Stack>
  );
}