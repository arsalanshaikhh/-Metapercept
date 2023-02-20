import { Center, Stack, Text } from "@chakra-ui/react";
import "./App.css";
import Banner from "./comp/Banner";
import Main from "./comp/Main";
import Navebar from "./comp/Navebar";

function App() {
  return (
    <>
      <Navebar />
      <Center bg="blue" color="white" className="grad">
        {/* <Stack spacing={3} m={"auto"}> */} <Banner />
        {/* </Stack> */}
      </Center>
      <Center w={"80%"} m="auto">
        <Main />
      </Center>
    </>
  );
}

export default App;
