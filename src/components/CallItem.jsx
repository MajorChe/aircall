import React from 'react';
import { Box, Button, Center, Flex, HStack, Text, Icon } from '@chakra-ui/react';
import { InfoOutlineIcon, PhoneIcon } from "@chakra-ui/icons";
import { IoMdArchive } from 'react-icons/io';
import Moment from 'react-moment';

const CallItem = (props) => {
  return (
    <>
      <Box textAlign={'center'} 
      bgColor={"white"} color={"black"} my="15px"
      >
        <Flex alignItems={"center"} justifyContent="space-between" mt={"10px"}>
          <HStack spacing={5}>
          <PhoneIcon color={"red"}/>
          <Text>{props.from}</Text>
          </HStack>
          <HStack>
          <Text><Moment format="MMM D, YYYY">{props.time}</Moment></Text>
          <InfoOutlineIcon onClick={()=> console.log("clicked")} />
          <Icon as={IoMdArchive} w={8} h={6}/>
          </HStack>
        </Flex>
      </Box>
      <hr/>
    </>
  );
};

export default CallItem;
