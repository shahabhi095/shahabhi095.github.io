import {

  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  HStack,
  Link,
} from '@chakra-ui/react';
 import { AiOutlineLinkedin } from "react-icons/ai";
  import { BsTelephone } from "react-icons/bs";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
 
} from "react-icons/md";
import { BsGithub, BsPerson } from 'react-icons/bs';
import React from 'react'

const ContactMe = () => {
  return (
    <Box p={12} id="Contact">
      <Text color={"#f6324b"} textAlign="center" pb={3}>
        GET IN TOUCH
      </Text>
      <Heading
        textAlign={"center"}
        fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
        pb="3"
      >
        Conatct Me
      </Heading>
      <Box mt={"2%"} border={"1px solid #f6324b"} w={"10%"} m="auto"></Box>
      <br />
      <br />
      <Flex
        direction={{ base: "column", md: "column", lg: "row", xl: "row" }}
        gap={[10, 8, 6, 20]}
      >
        <Box maxW="40%">
          <VStack
            pl={0}
            spacing={3}
            alignItems="flex-start"
            justifyContent={"left"}
          >
            <Heading fontSize="xl">Just Say Hi</Heading>
            <Text>
              {" "}
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </Text>
            <Button
              size="md"
              height="48px"
              width="240px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdPhone color="#1970F1" size="20px" />}
            >
              +917488026507
            </Button>
            <Button
              size="md"
              height="48px"
              width="240px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
            >
              shahabhi095@gmail.com
            </Button>
            <Button
              size="md"
              height="48px"
              width="240px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: "2px solid #1C6FEB" }}
              leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
            >
              Sitamarhi, Bihar, India
            </Button>
          </VStack>
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            alignItems="flex-start"
          >
            <Link
              href="https://www.linkedin.com/in/abhinandan-kumar-b86265184/"
              isExternal
            >
              {" "}
              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<AiOutlineLinkedin size="28px" />}
              />
            </Link>
            <Link href="https://github.com/shahabhi095" isExternal>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<BsGithub size="28px" />}
              />
            </Link>
            <Link href="mailto:shahabhi095@gmail.com">
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "#0D74FF" }}
                icon={<MdEmail size="28px" />}
              />
            </Link>
          </HStack>
        </Box>
        <Box>
          <Box borderRadius="lg">
            <Box m={8} color="white">
              <VStack spacing={5}>
                <FormControl id="name">
                  <Flex
                    gap={4}
                    direction={{
                      base: "column",
                      md: "column",
                      lg: "row",
                      xl: "row",
                    }}
                  >
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" placeholder="First Name" />
                    </InputGroup>

                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" placeholder="Last Name" />
                    </InputGroup>
                  </Flex>
                </FormControl>
                <FormControl id="name">
                  <Flex
                    gap={4}
                    direction={{
                      base: "column",
                      md: "column",
                      lg: "row",
                      xl: "row",
                    }}
                  >
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsTelephone color="gray.800" />}
                      />
                      <Input type="text" size="md" placeholder="Phone" />
                    </InputGroup>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="text" size="md" placeholder="Email" />
                    </InputGroup>
                  </Flex>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    height={"130px"}
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="message"
                  />
                </FormControl>
                <FormControl id="name">
                  <Button
                    fontSize={"18px"}
                    fontWeight={600}
                    w={"100%"}
                    variant="solid"
                    bg="#0D74FF"
                    color="white"
                    _hover={{}}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactMe


