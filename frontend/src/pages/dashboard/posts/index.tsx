
import React from 'react'
import DashboardLayout from '../layout'
import { Box, Button, Flex, HStack, Image,Text, VStack } from '@chakra-ui/react'


const posts = [ 
  {
    id: "1",
    image: "https://bit.ly/dan-abramov",
    createdAt: "jan 16 2024",
    postTitle: "Understanding Humans psycology, philosophy and Psiology",
  },

  {
    id: "2",
    image: "https://bit.ly/dan-abramov",
    createdAt: "jan 16 2024",
    postTitle: "Understanding Humans psycology, philosophy and Psiology",
  },
  {
    id: "3",
    image: "https://bit.ly/dan-abramov",
    createdAt: "jan 16 2024",
    postTitle: "Understanding Humans psycology, philosophy and Psiology",
  },
  {
    id: "4",
    image: "https://bit.ly/dan-abramov",
    createdAt: "jan 16 2024",
    postTitle: "Understanding Humans psycology, philosophy and Psiology",
  },
]
const Posts = () => {
  return (
   <DashboardLayout>
<Box bg={'blackTrans-5'} minH={'300px'} flex={1}>

  <Flex p={'24px 0px'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'} flex={'1 0 0'} alignSelf={'stretch'}>

  
    <Flex p={'12px 20px 12px 16px'} justifyContent={'space-between'} alignItems={'flex-start'} alignSelf={'stretch'} background={'white'}>
      <Text fontSize={'32px'} fontWeight={600}>Posts</Text>

      <Button display={'flex'} p={'8px 20px'} alignItems={'flex-start'} gap={10} borderRadius={999}>
        <HStack  pr={4} gap={4}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M5.96717 23.3333C5.43051 23.3333 4.98251 23.1537 4.62317 22.7943C4.26306 22.4342 4.08301 21.9858 4.08301 21.4492V6.55083C4.08301 6.01417 4.26306 5.56617 4.62317 5.20683C4.98251 4.84672 5.43051 4.66667 5.96717 4.66667H16.8265V5.83333H5.96717C5.78829 5.83333 5.62379 5.908 5.47367 6.05733C5.32434 6.20744 5.24967 6.37194 5.24967 6.55083V21.4492C5.24967 21.6281 5.32434 21.7926 5.47367 21.9427C5.62379 22.092 5.78829 22.1667 5.96717 22.1667H20.8655C21.0444 22.1667 21.2089 22.092 21.359 21.9427C21.5083 21.7926 21.583 21.6281 21.583 21.4492V10.5898H22.7497V21.4492C22.7497 21.9858 22.57 22.4338 22.2107 22.7932C21.8506 23.1533 21.4022 23.3333 20.8655 23.3333H5.96717ZM9.33301 19.25V18.0833H17.4997V19.25H9.33301ZM9.33301 15.75V14.5833H17.4997V15.75H9.33301ZM9.33301 12.25V11.0833H17.4997V12.25H9.33301ZM20.4163 9.33333V7H18.083V5.83333H20.4163V3.5H21.583V5.83333H23.9163V7H21.583V9.33333H20.4163Z" fill="white"/>
          </svg>
          <Text fontSize={'16px'} fontWeight={600}>Create Post</Text>

        </HStack>
      </Button>
    </Flex>
    


  <Flex p={'19px 0px'} justifyContent={'center'} alignItems={'center'} gap={'20px'} alignSelf={'stretch'}>

   {posts.map((post) => (
    <>
      <Box key={post.id} display={'flex'} ml={2} w={'320px'} pb={'16px'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'} borderRadius={'10px'} border={'1px solid rgba(0, 0, 0, 0.05)'}background={'#fff'}>
     <Image borderRadius={'10px'}  objectFit={'cover'} src={post.image} alt='Dan Abramov' />
    <Flex w={'320px'} p={'1px 224px 4px 15px '} alignItems={'center'} borderBottom={'1px solid black-5'}>
      <Text fontSize={'14px'} fontWeight={400}>{post.createdAt}</Text>
    </Flex>
    <Flex h={79} p={'6px 14px'} alignItems={'flex-start'} gap={'10px'} alignSelf={'stretch'}>
    <Text fontSize={15} fontWeight={600}> {post.postTitle}</Text>
    </Flex>
    <HStack display={'flex'} p={'12px 14px'} alignItems={'center'} gap={'16px'} alignSelf={'stretch'}>
      <Button display={'flex'} p={'9px 24px'} alignItems={'flex-start'} gap={10} borderRadius={999}>
      <Text fontSize={16}  fontWeight={600}> Edit post </Text>
        </Button>
      <Button display={'flex'} p={'9px 24px'} alignItems={'flex-start'} gap={10} background={'white'} borderRadius={999} border={'1px solid black'}>
         <Text fontSize={16} color={'black'} fontWeight={600}> View post </Text>
         </Button>
    </HStack>
    </Box>
    </>
   ))}
  </Flex>

  </Flex>


</Box>
   </DashboardLayout>
  )
}

export default Posts