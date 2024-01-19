import { Avatar, Box, Flex, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import MatIcon from "./MatIcon";

export default function TrendingPosts(){
    return <Box py={5} mx={'auto'}>
        <Box px={'10px'}>

        <Flex p={'10px'} gap={'10px'} align={'center'}>
            <MatIcon name="chart_data" size={34}/>
            <Heading size={'md'} fontWeight={'medium'}>Trending on TopicTrove</Heading>
        </Flex>
        </Box>
<Box maxW={'1300px'} mx={'auto'}>

        <HStack wrap={'wrap'} py={3} px={4} rowGap={4} columnGap={5} maxWidth={'auto'}>

<HStack align={'start'} gap={'18px'} p={4} maxW={'610px'} minW={'300px'} bg={'appBlack.50'} borderRadius={'6px'}>
    <Image alt='' h={'130px'} src="" w={'140px'}/>
    <Stack>
<HStack gap={'10px'}><Avatar src="" size={'sm'} /> <Text fontWeight={'medium'} fontSize={'14px'} as={'span'}>Mark Andre</Text></HStack>
    <Heading fontWeight={'semibold'} fontSize={'17px'}>Understanding human psychology, philosophy and physiology</Heading>
    </Stack>
</HStack>

        </HStack>
    </Box>
    </Box>
}