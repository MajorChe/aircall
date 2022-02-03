import { Box} from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    {/* created outer box representing a mobile phone */}
    <Box
      p={5}
      shadow='md'
      borderWidth='1px'
      flex='1'
      borderRadius='md'
      height={"600px"}
      width={"450px"}
      align="center"
      margin={"auto"}
      mt="20"
      overflowY={"scroll"}
      bgColor="white"
    >
      <Navbar/>
    </Box>
    </>
  );
}

export default App;
