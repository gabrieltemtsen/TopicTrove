import HeaderNav from '@/components/HeaderNav'
import { Avatar, Box, Center, Container, Divider,Image, Flex, Heading, Icon, PinInput, PinInputField, Square, Text, Wrap, WrapItem } from '@chakra-ui/react'

import React from 'react'

const Creators = () => {
  return (
    <div>

<Box maxW={'1350px'} marginX={'auto'}>
    <HeaderNav />

   <Box bg={'appGreen'} display={'flex'}  h={'297px'} p={'19px 606px 20px 0px'} alignItems={'center'} alignSelf={'stretch'}>
'    <Box w={'744px'} h={'258px'}>
    <Heading color={'black'} fontSize={'60px'} fontWeight={800}>Find the best Creators</Heading>
    <Text> Request quality content from top creators on TopicTRove</Text>
'    </Box>

   </Box>






    </Box>
        
    </div>
  )
}

export default Creators