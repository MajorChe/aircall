import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import CallItem from './CallItem';

const Activity = () => {
  const [calls,setCalls] = useState([]);

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then((response) => {
      console.log(response.data)
      setCalls(response.data)
    })
    .catch((e) => console.log(e))
  },[])

  const callItemList = calls.map((singleCall) => {
    return (
    <CallItem
    key={singleCall.id}
    from={singleCall.from}
    time={singleCall.created_at}
    />)
  })
  return (
    <>
    {/* my is margin top and bottom*/}
      <Heading fontSize={"2xl"} my={"20px"}>Activity Feed</Heading>
      {callItemList}
    </>
  );
};

export default Activity;
