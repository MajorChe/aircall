import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Divider, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Activity from "./Activity";
import Archive from "./Archive";

const Navbar = () => {
  
  const [state,setState] = useState("activity");

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
        {state === "activity" && <Activity/>}
        {state === "archived" && <Archive/>}
    </>
  );
};

export default Navbar;
