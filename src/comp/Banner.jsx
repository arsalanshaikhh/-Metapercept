import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import "./Banner.css";

const Banner = () => {
  return (
    <Box textAlign={"center"} m={"5% 10%"}>
      <Text fontSize="3xl" m={"10px"}>
        Title
      </Text>
      <Text fontSize="2xl" m={"10px"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,{" "}
      </Text>
      <Button colorScheme="gray" color={"black"}>
        Read More
      </Button>
    </Box>
  );
};

export default Banner;
