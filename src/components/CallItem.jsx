import React from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Tooltip,
} from "@chakra-ui/react";
import { CalendarIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { MdVoicemail } from "react-icons/md";
import Moment from "react-moment";
import axios from "axios";

const CallItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const archiveFunc = () => {
    const data = {is_archived: true}
      axios.post(`https://aircall-job.herokuapp.com/activities/${props.callData.id}`,data)
      .then(response => console.log(response.data.id, "archived"))
      .catch(e => console.log(e))
  }
  
  return (
    <>
      {/* modal to show the call details only when opened*/}

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"md"}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Call Details:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text py={3}><b>id: </b>{props.callData.id}</Text>
            <HStack spacing={8}>
            <Text py={3}><b>From: </b>{props.callData.from}</Text>
            <Text py={3}><b>To: </b>{props.callData.to}</Text>
            </HStack>
            <HStack spacing={"70px"}>
            <Text py={3}><b>Via: </b>{props.callData.via}</Text>
            <Text py={3}><b>Call Duration: </b>{props.callData.duration} seconds</Text>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    {/* box display of data starts here  */}
      <Box textAlign={"center"} bgColor={"white"} color={"black"} my="15px">
        <Flex alignItems={"center"} justifyContent="space-between" mt={"10px"}>
          <HStack spacing={5}>
            {/* call_type = missed --> color is red
              call_type = answered --> color is green
              if call_type = voicemail --> color is blue */}
            {props.callData.call_type === "missed" ? (
              <HiOutlinePhoneMissedCall color={"red"} />
            ) : props.callData.call_type === "answered" ? (
              <BiPhoneCall color={"green"} />
            ) : (
              <MdVoicemail color={"blue"} />
            )}
            <Text>{props.callData.from}</Text>
          </HStack>
          <HStack>
            <Text>
              {/* using moment package to convert date */}
              <Moment format="MMM D, YYYY">{props.callData.created_at}</Moment>
            </Text>
            {/* tool tip gives info on hover */}
            <Tooltip label='Click for call details'><InfoOutlineIcon onClick={onOpen} cursor="pointer" color={"green"}/></Tooltip>
            {props.callData.is_archived === false && <Tooltip label='Archive'><CalendarIcon w={5} h={5} onClick={archiveFunc} cursor="pointer" color={"red.400"}/></Tooltip>}
          </HStack>
        </Flex>
      </Box>
      <hr />
    </>
  );
};

export default CallItem;