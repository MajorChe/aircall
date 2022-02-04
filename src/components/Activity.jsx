import { Heading } from '@chakra-ui/react';
import React from 'react';
import CallItem from './CallItem';

const Activity = (props) => {

  const callItemList = props.calls.map((singleCall) => {
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
