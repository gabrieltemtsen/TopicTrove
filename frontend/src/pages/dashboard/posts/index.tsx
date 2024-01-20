
import React from 'react'
import DashboardLayout from '../layout'
import { Box, Button, HStack, Heading } from '@chakra-ui/react'
import MatIcon from '@/components/MatIcon'
import { Link } from '@chakra-ui/next-js'

const Posts = () => {
  return (
   <DashboardLayout>
    <HStack px={4} py={3} justify={'space-between'}><Heading>Posts</Heading><Button rounded={'full'} as={Link} href={'posts/new'} textDecor={'none!important'}><MatIcon name='post_add'/> Create Post</Button></HStack>
<Box bg={'blackTrans-5'} minH={'300px'} flex={1}>

</Box>
   </DashboardLayout>
  )
}

export default Posts