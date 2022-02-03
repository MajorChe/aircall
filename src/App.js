import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons'
import Body from "./components/Navbar";

function App() {
  return (
    <>
    {/* created outer box representing a mobile phone */}
    <Box
      p={5}
      shadow='md'
      borderWidth='1px'
      flex='1'
      borderRadius='md'
      height={"600px"}
      width={"450px"}
      align="center"
      margin={"auto"}
      mt="20"
      overflowY={"scroll"}
    >
      <HStack justifyContent={"center"} spacing="5">
        <PhoneIcon/>
        <Heading fontSize='4xl'>aircall</Heading>
      </HStack>
      <Text mt={4}>text</Text>
    </Box>
    </>
  );
}

export default App;
