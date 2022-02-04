import { Button, Heading, HStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CallItem from './CallItem';

const Archive = () => {
  const [calls,setCalls] = useState([]);

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then((response) => {
      setCalls(response.data)
    })
    .catch((e) => console.log(e))
  },[])

  const callItemList = calls.map((singleCall) => {
    return (
    singleCall.is_archived === true && <CallItem
    key={singleCall.id}
    callData={singleCall}
    />)
  })
  return (
    <>
    {/* my is margin top and bottom*/}
    <HStack justifyContent={"center"} spacing={5}>
      <Heading fontSize={"2xl"} my={"20px"}>Archived Feed</Heading>
      <Button colorScheme='red' variant='outline' size={"sm"}>Reset Calls</Button>
      </HStack>
      {callItemList}
    </>
  );
};

export default Archive;
