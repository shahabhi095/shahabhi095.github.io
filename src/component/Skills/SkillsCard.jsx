import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function SkillsCard({IMAGE, tag}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('#f6324b', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>

        <Box
        bg={"#23263a"}
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'170px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
              
            },
          }}>
          <Image
           transition= {"background-color 2s ease-out 100ms"}
            rounded={'lg'}
            height={160}
            width={250}
            objectFit={'cover'}
            _hover={{
               width: 260,
                height: 170,
                bg:"#23263a"
            }}
            
            src={IMAGE}
          />
        </Box>
         <Stack align={'center'}>
          <Text color={'white'} fontSize={'sm'} fontWeight={"600"} >
          { tag}
          </Text>
          </Stack>
      </Box>
    </Center>
  );
}