import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import CallItem from './CallItem';

const Activity = () => {
  const [calls,setCalls] = useState([]);
  // loading state is to avoid memory leak while using useEffect for async function
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then((response) => {
      setCalls(response.data)
    })
    .catch((e) => console.log(e))
    return (() => setLoading(false))
  })

  const callItemList = calls.map((singleCall) => {
    return (
    singleCall.is_archived === false && <CallItem
    key={singleCall.id}
    callData={singleCall}
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
