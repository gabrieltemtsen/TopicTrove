import HeaderNav from "@/components/HeaderNav";
import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Image,
  Flex,
  Heading,
  Icon,
  PinInput,
  PinInputField,
  Square,
  Text,
  Wrap,
  WrapItem,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const creators = [
  {
    avatar: "https://bit.ly/kent-c-dodds",
    name: "Mark Andre",
    bio: "I am a good and novel Writer",
    genre: ["AI", "Music"],
  },
  {
    avatar: "https://bit.ly/kent-c-dodds",
    name: "Alex John",
    bio: "I am a good and novel Writer",
    genre: ["AI", "Music"],
  },
  {
    avatar: "https://bit.ly/kent-c-dodds",
    name: "Pluto Boy",
    bio: "I am a good and novel Writer",
    genre: ["AI", "Music"],
  },
  {
    avatar: "https://bit.ly/kent-c-dodds",
    name: "Chika Ojo",
    bio: "I am a good and novel Writer",
    genre: ["AI", "Music"],
  },
];

const Creators = () => {
  let counter = 0;
  return (
    <div>
      <Box maxW={"1350px"} marginX={"auto"}>
        <HeaderNav />

        <Box
          className="creator-intro"
          bg={"appGreen"}
          display={"flex"}
          h={"297px"}
          p={"19px 606px 20px 0px"}
          alignItems={"center"}
          alignSelf={"stretch"}
        >
          <Box w={"744px"} h={"258px"} ml={8}>
            <Heading color={"black"} fontSize={"60px"} fontWeight={800}>
              Find the best Creators
            </Heading>
            <Text
              fontSize={20}
              fontWeight={400}
              lineHeight={"normal"}
              mt={4}
              maxW={"25rem"}
            >
              {" "}
              Request quality content from top creators on TopicTRove
            </Text>
          </Box>
        </Box>

        {/* ***SEARCH SECTION**** */}

        <Box
          mt={30}
          display={"flex"}
          p={"0px 116px"}
          w={"1300px"}
          maxW={"1300px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            p={"16px 24px"}
            justifyContent={"center"}
            alignItems={"center"}
            alignContent={"center"}
            gap={20}
            flexWrap={"wrap"}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
    <path d="M23.3667 24.5L16.0167 17.15C15.4333 17.6167 14.7625 17.9861 14.0042 18.2583C13.2458 18.5306 12.4389 18.6667 11.5833 18.6667C9.46389 18.6667 7.67033 17.9324 6.20267 16.464C4.735 14.9956 4.00078 13.202 4 11.0833C4 8.96389 4.73422 7.17033 6.20267 5.70267C7.67111 4.235 9.46467 3.50078 11.5833 3.5C13.7028 3.5 15.4967 4.23422 16.9652 5.70267C18.4336 7.17111 19.1674 8.96467 19.1667 11.0833C19.1667 11.9389 19.0306 12.7458 18.7583 13.5042C18.4861 14.2625 18.1167 14.9333 17.65 15.5167L25 22.8667L23.3667 24.5ZM11.5833 16.3333C13.0417 16.3333 14.2814 15.8231 15.3027 14.8027C16.3239 13.7822 16.8341 12.5424 16.8333 11.0833C16.8333 9.625 16.3231 8.38561 15.3027 7.36517C14.2822 6.34472 13.0424 5.83411 11.5833 5.83333C10.125 5.83333 8.88561 6.34394 7.86517 7.36517C6.84472 8.38639 6.33411 9.62578 6.33333 11.0833C6.33333 12.5417 6.84394 13.7814 7.86517 14.8027C8.88639 15.8239 10.1258 16.3341 11.5833 16.3333Z" fill="#A2A4A5"/>
    </svg> */}
            <Input
              display={"flex"}
              placeholder="Search Creator"
              w={"739px"}
              h={"48px"}
              p={"17px 24px"}
              alignItems={"center"}
              gap={"16px"}
              borderRadius={"999px"}
              border={"1px solid #A2A4A5"}
            />
          </Box>
        </Box>

        {/* ***TOP_CREATORS SECTION**** */}
        <Box
          display={"flex"}
          w={"1300px"}
          p={"10px 1123px 10px 13px"}
          alignItems={"center"}
          borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
        >
          <Text fontWeight={600} fontSize={24}>
            Top Creators
          </Text>
        </Box>

        <Box
          display={"flex"}
          maxW={"1300px"}
          p={"20px 11px"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          gap={"15px"}
          alignSelf={"stretch"}
          flexWrap={"wrap"}
        >
          {creators.map((creator) => (
            <>
              <Box
                key={counter++}
                display={"flex"}
                width={"629px"}
                p={"14px 16px"}
                alignItems={"flex-start"}
                alignContent={"flex-start"}
                gap={"16px"}
                flexWrap={"wrap"}
                borderRadius={10}
                border={"1px solid rgba(0, 0, 0, 0.15)"}
              >
                <WrapItem>
                  <Avatar
                    name="TopicTrove Creator"
                    src={creator.avatar}
                    borderRadius={12}
                    w={100}
                    h={120}
                    flexShrink={0}
                  />

                  <Box w={323} h={158} flexShrink={0}>
                    <Box>
                      <Box
                        fontSize={20}
                        fontWeight={600}
                        m={2}
                        lineHeight={"normal"}
                      >
                        {" "}
                        {creator.name}
                        <Box
                          display={"inline-flex"}
                          ml={5}
                          mb={-1}
                          mt={-9}
                          p={"3px 10px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"10px"}
                          borderRadius={999}
                          background={"var(--sec-color-green, #06F2AB)"}
                        >
                          <Text
                            fontSize={12}
                            fontWeight={500}
                            lineHeight={"normal"}
                          >
                            PPP: $25
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Text
                      fontSize={15}
                      fontWeight={400}
                      m={2}
                      lineHeight={"normal"}
                      color={"#636566"}
                    >
                      {" "}
                      {creator.bio}
                    </Text>
                    <Box
                      display={"flex"}
                      w={300}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                    >
                      <Text
                        fontWeight={500}
                        m={2}
                        fontSize={16}
                        lineHeight={"normal"}
                      >
                        Writes about:{" "}
                      </Text>
                      <Box
                        display={"flex"}
                        w={300}
                        p={"10px 0px"}
                        alignItems={"flex-start"}
                        alignContent={"flex-start"}
                        gap={"0px 10px"}
                        flexWrap={"wrap"}
                      >
                        {creator.genre.map((item) => (
                          <>
                            <Box
                              key={counter++}
                              display={"flex"}
                              p={"4px 14px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={"10px"}
                              borderRadius={999}
                              background={"rgba(0, 0, 0, 0.05)"}
                            >
                              <Text
                                fontSize={14}
                                fontWeight={500}
                                lineHeight={"normal"}
                              >
                                {item}
                              </Text>
                            </Box>
                          </>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <VStack spacing={2}>
                  <Box
                    display={"flex"}
                    p={2}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={16}
                  >
                    <Box
                      display={"flex"}
                      w={138}
                      minW={120}
                      p={"6px 16px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={10}
                      borderRadius={999}
                      background={"black"}
                    >
                      <Text
                        color={"white"}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={"normal"}
                      >
                        Request a post
                      </Text>
                    </Box>
                    <Box
                      display={"flex"}
                      w={138}
                      minW={120}
                      p={"6px 16px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={10}
                      borderRadius={999}
                      border={"1px solid black"}
                    >
                      <Text
                        color={"black"}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={"normal"}
                      >
                        View Profile
                      </Text>
                    </Box>
                  </Box>
                    
                  </VStack>
                 
                </WrapItem>
              </Box>
            </>
          ))}
        </Box>

        {/* ***MORE_CREATORS SECTION**** */}
        <Box
          display={"flex"}
          p={"10px 1123px 10px 13px"}
          alignItems={"center"}
          borderBottom={"1px solid rgba(0, 0, 0, 0.05)"}
        >
          <Text fontWeight={600} w={"17rem"} fontSize={24}>
            More Creators
          </Text>
        </Box>

        <Box
          display={"flex"}
          maxW={"1300px"}
          p={"20px 11px"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          gap={"15px"}
          alignSelf={"stretch"}
          flexWrap={"wrap"}
        >
          {creators.map((creator) => (
            <>
              <Box
                display={"flex"}
                width={"629px"}
                p={"14px 16px"}
                alignItems={"flex-start"}
                alignContent={"flex-start"}
                gap={"16px"}
                flexWrap={"wrap"}
                borderRadius={10}
                border={"1px solid rgba(0, 0, 0, 0.15)"}
              >
                <WrapItem>
                  <Avatar
                    name="Kent Dodds"
                    src="https://bit.ly/kent-c-dodds"
                    borderRadius={12}
                    w={100}
                    h={120}
                    flexShrink={0}
                  />

                  <Box w={323} h={158} flexShrink={0}>
                    <Box>
                      <Box
                        fontSize={20}
                        fontWeight={600}
                        m={2}
                        lineHeight={"normal"}
                      >
                        {" "}
                        {creator.name}
                        <Box
                          display={"inline-flex"}
                          ml={5}
                          mb={-1}
                          mt={-9}
                          p={"3px 10px"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"10px"}
                          borderRadius={999}
                          background={"var(--sec-color-green, #06F2AB)"}
                        >
                          <Text
                            fontSize={12}
                            fontWeight={500}
                            lineHeight={"normal"}
                          >
                            PPP: $25
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Text
                      fontSize={15}
                      fontWeight={400}
                      m={2}
                      lineHeight={"normal"}
                      color={"#636566"}
                    >
                      {" "}
                      {creator.bio}
                    </Text>
                    <Box
                      display={"flex"}
                      w={300}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                    >
                      <Text
                        fontWeight={500}
                        m={2}
                        fontSize={16}
                        lineHeight={"normal"}
                      >
                        Writes about:{" "}
                      </Text>
                      <Box
                        display={"flex"}
                        w={300}
                        p={"10px 0px"}
                        alignItems={"flex-start"}
                        alignContent={"flex-start"}
                        gap={"0px 10px"}
                        flexWrap={"wrap"}
                      >
                        {creator.genre.map((item) => (
                          <>
                            <Box
                              display={"flex"}
                              p={"4px 14px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              gap={"10px"}
                              borderRadius={999}
                              background={"rgba(0, 0, 0, 0.05)"}
                            >
                              <Text
                                fontSize={14}
                                fontWeight={500}
                                lineHeight={"normal"}
                              >
                                {item}
                              </Text>
                            </Box>
                          </>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    p={2}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={16}
                  >
                    <Box
                      display={"flex"}
                      w={138}
                      minW={120}
                      p={"6px 16px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={10}
                      borderRadius={999}
                      background={"black"}
                    >
                      <Text
                        color={"white"}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={"normal"}
                      >
                        Request a post
                      </Text>
                    </Box>
                    <Box
                      display={"flex"}
                      w={138}
                      minW={120}
                      p={"6px 16px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={10}
                      borderRadius={999}
                      border={"1px solid black"}
                    >
                      <Text
                        color={"black"}
                        fontSize={14}
                        fontWeight={500}
                        lineHeight={"normal"}
                      >
                        View Profile
                      </Text>
                    </Box>
                  </Box>
                </WrapItem>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Creators;
