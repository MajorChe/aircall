import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import CallItem from './CallItem';

const Activity = () => {
  const [calls,setCalls] = useState([])
  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then((response) => {
      console.log(response.data)
      setCalls(response.data)
    })
    .catch((e) => console.log(e))
  },[])
  return (
    <>
      <Heading>Activity Feed</Heading>
      <CallItem/>
    </>
  );
};

export default Activity;
