import HeaderNav from '@/components/HeaderNav'
import { Avatar, Box, Center, Container, Flex, Heading, Icon, PinInput, PinInputField, Square, Text, Wrap, WrapItem } from '@chakra-ui/react'

import React from 'react'

const Post = () => {

    const CircleIcon = (props: any) => (
        <Icon viewBox='0 0 200 200' {...props}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      )
  return (

    <>
      <HeaderNav/>

    

      

        <Box display={'flex'} flexDirection={'column'} gap={16} flexShrink={0} w={'1050px'} pt={8} pb={40} maxW={'1050px'} h={345} alignItems={'flex-start'} mt={'45px'} ml={'170px'}>

        <Heading fontSize={'40px'} fontWeight={700} lineHeight={'normal'} size={'lg'}>The Astonishing Origins of 6 Common Compound Words</Heading>
  
        <Box mt={-5} mb={-6} flexShrink={0} h={82} w={738} fontWeight={400} fontSize={18} lineHeight={'140%'} fontStyle={'normal'} color='#636566'>
        The 1989 Mill Valley Film Festival, in association with the Hanson Gallery in 
        neighboring Sausalito, installed an exhibition of my portraits, including movie directors, 
        actors, and writers. I was billed as a “Featured Artist”
        </Box>

        <Box display={'flex'} alignItems={'center'} gap={'24px'} alignSelf={'stretch'}>
        <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'7px'}>
            <Text fontWeight={500} lineHeight={'normal'} fontSize={'20px'}>Mark Andre</Text>

            <Text color='#636566' fontWeight={400} lineHeight={'normal'} fontSize={'16px'}>8 min read <CircleIcon ml={4} mr={2} color={'#636566'} boxSize={1.5} /> Jan 18 2024</Text>

        </Box>
           
            
        </Box>

        </Box>
  



    
    </>
  
  )
}

export default Post