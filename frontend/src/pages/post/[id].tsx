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
} from "@chakra-ui/react";

import React from "react";

const post = {
    title: "The Astonishing Origins of 6 Common Compound Words",
    content:
        "The 1989 Mill Valley Film Festival, in association with the Hanson Gallery in neighboring Sausalito, installed an exhibition of my portraits, including movie directors, actors, and writers. I was billed as a “Featured Artist”",
    readTime: 5,
    createdAt: new Date(),
    author: {
        name: "Mark Andre",
        avatar: "",
    },
};

const Post = () => {
    const CircleIcon = (props: any) => (
        <Icon viewBox="0 0 200 200" {...props}>
            <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
        </Icon>
    );
    return (
        <>
            <Box maxW={"1350px"} marginX={"auto"}>
                <HeaderNav bg="transparent" />

                <section id="Title" className="post-title-section">
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={16}
                        mb={2}
                        pt={8}
                        pb={40}
                        maxW={"1050px"}
                        h={345}
                        alignItems={"flex-start"}
                        mt={"45px"}
                        ml={"170px"}
                    >
                        <Heading
                            fontSize={"40px"}
                            fontWeight={700}
                            lineHeight={"normal"}
                        >
                            {post.title}
                        </Heading>

                        <Box
                            mt={-5}
                            mb={-9}
                            h={82}
                            fontWeight={400}
                            fontSize={18}
                            lineHeight={"140%"}
                            maxW={"900px"}
                            fontStyle={"normal"}
                            color="#636566"
                        >
                            {post.content}

                            <Divider mt={5} mb={2} orientation="horizontal" />
                        </Box>

                        <Box
                            display={"flex"}
                            mt={2}
                            mb={-5}
                            alignItems={"flex-start"}
                            gap={"20px"}
                            alignSelf={"stretch"}
                        >
                            <Avatar
                                size="md"
                                name="Christian Nwamba"
                                src="https://bit.ly/code-beast"
                            />
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"flex-start"}
                                gap={"7px"}
                            >
                                <Text
                                    fontWeight={500}
                                    lineHeight={"normal"}
                                    fontSize={"20px"}
                                >
                                    Mark Andre
                                </Text>

                                <Text
                                    color="#636566"
                                    fontWeight={400}
                                    lineHeight={"normal"}
                                    fontSize={"16px"}
                                >
                                    8 min read{" "}
                                    <CircleIcon
                                        ml={4}
                                        mr={2}
                                        color={"#636566"}
                                        boxSize={1.5}
                                    />{" "}
                                    Jan 18 2024
                                </Text>
                            </Box>
                        </Box>
                        <Divider orientation="horizontal" />
                    </Box>
                </section>

                <section className="post-image">
                    <Box>
                        <Image
                            src="https://bit.ly/48UyfzN"
                            alt="Dan Abramov"
                            h={"640px"}
                            className="w-full"
                            objectFit={"cover"}
                        />
                    </Box>
                </section>

                <section className="post-content">
                    <Text
                        color={"black"}
                        h={"176px"}
                        fontSize={18}
                        flexShrink={0}
                        fontWeight={400}
                        alignSelf={"stretch"}
                    >
                        A week or so earlier, I was in the gallery with the
                        staff, putting our heads together about how to hang the
                        installation, when it dawned on us that I’d never
                        photographed either Woods or Richardson. Unfortunately,
                        they weren’t available to sit for portraits before the
                        festival kicked off. But it might seem downright
                        negligent to gallery visitors, we thought, that I’d
                        never photographed one of the most illustrious
                        cinemagicians of them all, a practically home-grown hero
                        who lived and worked not so far, far away: George Lucas.
                        Skywalker Ranch, the Lucasfilm production facility, was
                        a short drive from the gallery.
                    </Text>
                </section>

                <Box ml={"170px"} h={"202px"} mb={9}>
                    <Box
                        display={"inline-flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"10px"}
                        padding={"2px 79px 35px 0px"}
                    >
                        <Avatar
                            flexShrink={0}
                            size="md"
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                        />
                        {/* {" "} */}
                        <Text color={"black"} fontSize={24} fontWeight={600}>
                            Written By Mark Andre
                        </Text>
                        <Text color={"636566"} fontWeight={400} fontSize={16}>
                            {" "}
                            This is my Bio
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Post;
