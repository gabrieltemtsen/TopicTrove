import SideNav from "@/components/SideNav";
import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const Overview = () => {
    return (
        <Box>
            <SideNav />

            <Box ml={"290px"}>
                <Box
                    display={"flex"}
                    h={"856px"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    flex={"1 0 0"}
                    background={"#FFF"}
                >
                    <Box
                        display={"flex"}
                        height={"69px"}
                        mr={9}
                        flexDirection={"column"}
                        alignItems={"flex-end"}
                        gap={10}
                        flexShrink={0}
                        alignSelf={"stretch"}
                        background={"white"}
                        borderBottom={"1px solid rgba(0, 0, 0, 0.15)"}
                    >
                        <Box
                            display={"flex"}
                            w={"238px"}
                            p={"12px 8px"}
                            m={0}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Box
                                display={"flex"}
                                p={"5px 20px"}
                                alignItems={"center"}
                                gap={16}
                                borderRadius={999}
                                border={"1px solid #D9082E"}
                            >
                                <Box w={"1px"} h={"28px"}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="29"
                                        viewBox="0 0 28 29"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.55116 23.8333C6.01449 23.8333 5.56649 23.6537 5.20716 23.2943C4.84705 22.9342 4.66699 22.4858 4.66699 21.9492V7.05082C4.66699 6.51416 4.84705 6.06616 5.20716 5.70682C5.56649 5.34671 6.01449 5.16666 6.55116 5.16666H14.0225V6.33332H6.55116C6.37227 6.33332 6.20777 6.40799 6.05766 6.55732C5.90833 6.70743 5.83366 6.87193 5.83366 7.05082V21.9492C5.83366 22.128 5.90833 22.2925 6.05766 22.4427C6.20777 22.592 6.37227 22.6667 6.55116 22.6667H14.0225V23.8333H6.55116ZM19.206 18.6277L18.387 17.7888L21.0925 15.0833H10.7243V13.9167H21.0925L18.3858 11.21L19.206 10.3723L23.3337 14.5L19.206 18.6277Z"
                                            fill="#D9082E"
                                        />
                                    </svg>
                                </Box>
                                <Text
                                    color={"red"}
                                    fontSize={"16px"}
                                    fontWeight={400}
                                    lineHeight={"normal"}
                                >
                                    {" "}
                                    Logout
                                </Text>
                            </Box>
                            <Box w={"20px"} h={"50px"} borderRadius={"999px"}>
                                <Avatar
                                    name="Christian Nwamba"
                                    src="https://bit.ly/code-beast"
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        p={"8px 0px"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={10}
                        flex={"1 0 0"}
                        alignSelf={"stretch"}
                        background={"var(--black-5-trans, rgba(0, 0, 0, 0.05))"}
                    >
                        <Box
                            display={"flex"}
                            p={"19px 12px"}
                            alignItems={"flex-center"}
                            gap={20}
                            alignSelf={"stretch"}
                        >
                            <Box
                                display={"flex"}
                                w={"240px"}
                                h={"132px"}
                                p={"14px"}
                                flexDirection={"column"}
                                gap={10}
                                borderRadius={"10px"}
                                border={"1px solid rgba(0, 0, 0, 0.15)"}
                                background={"white"}
                            >
                                <Box></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Overview;
