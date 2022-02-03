import React from 'react';
import { Box, Button, Center, Flex, HStack, Text, Icon } from '@chakra-ui/react';
import { InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";
import { IoMdArchive } from 'react-icons/io'

const CallItem = () => {
  return (
    <>
      <Box textAlign={'center'} 
      bgColor={"white"} color={"black"}
      >
        <Flex alignItems={"center"} justifyContent="space-between" mt={"10px"}>
          <HStack spacing={5}>
          <PhoneIcon/>
          <Text >9878654333</Text>
          </HStack>
          <HStack>
          <Text>6:30 AM</Text>
          <InfoOutlineIcon onClick={()=> console.log("clicked")} />
          <Icon as={IoMdArchive} w={8} h={6}/>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default CallItem;
