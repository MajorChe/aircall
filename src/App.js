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
      rounded={'lg'}
      flex='1'
      borderRadius='3xl'
      height={"650px"}
      width={"400px"}
      align="center"
      margin={"auto"}
      mt="20"
      // overflowY={"scroll"} overflowY can be set to true if vertical scrolling is required
      bgColor="white"
    >
      <Navbar/>
    </Box>
    </>
  );
}

export default App;
