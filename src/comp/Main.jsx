import React from "react";
import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import data from "../db.json";

const Main = () => {
  return (
    <Box textAlign={"center"} mt={"100px"}>
      <Text fontSize="3xl" m={"10px"}>
        Title
      </Text>
      <Text fontSize="2xl" m={"10px"} mb="20px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,{" "}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} textAlign={"left"}>
        {data.map((e) => {
          return (
            <GridItem w="100%" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
              <img
                width={"100%"}
                src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/120577637_4479828825421724_7566104106924558951_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=dd9801&_nc_ohc=bwG7P5joVQwAX9J3Anf&_nc_ht=scontent-bom1-1.xx&oh=00_AfDykuWXq3ohU2vRXXsRGlbI5e1Y_Y57ufZN9PjuvpiViA&oe=641ABB56"
                alt=""
              />
              <Text fontSize="2xl" m={"10px"}>
                {e.Name}
              </Text>
              <Text fontSize="15px" m={"10px"}>
                {e.ShortDesc}
              </Text>
              <Button ml="10px" colorScheme="#3bc7f4" variant="outline">
                View
              </Button>
            </GridItem>
          );
        })}
        {/* <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" /> */}
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" mt={"50px"} mb="50px">
        <Text fontSize="15px" textAlign="left" color="#4F6270">
          Copyright 2021 all rights Reserved
        </Text>
        <Text fontSize="15px" textAlign="end" color="#007AEE">
          Back to Top
        </Text>
      </Grid>
    </Box>
  );
};

export default Main;
