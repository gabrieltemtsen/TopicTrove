import {Box, Button, Flex, HStack, Heading, Stack, Text} from '@chakra-ui/react'

export default function HeroSection(){
return <Box bg={'appGreen'} w={'full'} borderBottom={'1px'} borderBottomColor={'appBlack.900'} px={'50px'} py={'50px'} >
<Stack maxW={600} px={{lg:4,base:3}} gap={5} pb={10}>
    <Heading fontWeight={900} display={'flex'} flexDir={'column'}>

        <Text as={'span'} fontSize={{lg:'60px',base:'40px'}}>Discover stories,</Text>
        <Text as={'span'} fontSize={{lg:'56px',base:'40px'}}>Request, Earn</Text>
    </Heading>
    <Text fontSize={'20px'} maxW={'363px'}>
    Your Posts, Your Paycheck. Empowering Users to Monetize Their Voice.


    </Text>
    <HStack wrap={'wrap'} maxW={'436px'} gap={4}>
        <Button rounded={'full'} size={'lg'}>Become a creator</Button>
        <Button rounded={'full'} variant={'outline'} size={'lg'}>Request a post</Button>
    </HStack>
</Stack>

    </Box>
}