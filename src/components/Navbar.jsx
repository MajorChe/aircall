import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Divider, Heading, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Activity from "./Activity";
import Archive from "./Archive";

const Navbar = () => {

  const [calls,setCalls] = useState([]);
  // loading state is to avoid memory leak while using useEffect for async function
  const [loading, setLoading] = useState(false); 
  const [state,setState] = useState("activity");

  useEffect(() => {
    setLoading(true);
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then((response) => {
      setCalls(response.data)
    })
    .catch((e) => console.log(e))
    return( () => setLoading(false))
  },[calls])

  return (
    <>
      <HStack justifyContent={"center"} spacing="5" mb={"20px"}>
        <PhoneIcon />
        <Heading fontSize="4xl">aircall</Heading>
      </HStack>
      <Divider style={{height: 1, borderColor: "#000"}}/>
      <HStack justify={"center"} spacing="60px" mt={"10px"}>
        <Button onClick={() => setState("activity")}>Activity Feed</Button>
        <Button onClick={() => {setState("archived")}}>Archived Calls</Button>
      </HStack>
        {state === "activity" && <Activity calls={calls}/>}
        {state === "archived" && <Archive calls={calls}/>}
    </>
  );
};

export default Navbar;
