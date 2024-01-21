
import React from 'react'
import DashboardLayout from './layout'
import { Box, Flex, HStack, Text,Select, } from '@chakra-ui/react'

const Overview = () => {
  return (
   <DashboardLayout>
<Box bg={'blackTrans-5'} minH={'300px'} flex={1}>

    <Box display={'flex'} p={'19px 12px'} alignItems={'flex-start'} gap={'20px'} alignSelf={'stretch'}>

    <Box display={'flex'} w={'auto'} h={'132px'} p={'14px'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'} border={'1px solid black-trans-15'} borderRadius={'10px'} background={'#fff'}>
        <HStack display={'flex'} p={'4px 0px'} justifyContent={'space-between'} alignItems={'flex-start'} alignSelf={'stretch'}>
            <Text fontSize={'18px'} fontWeight={500}> Post Views</Text>
            <Box w={'99px'} display={'flex'} padding={'0px 12px'} justifyContent={'center'} alignItems={'center'} gap={'10px'} border={'1px solid black-trans-5'} borderRadius={'4px'} >
            <Select fontSize={'12px'} variant='outline' placeholder='All time' >
                <option value="Month">Month</option>

            </Select>

            </Box>
        </HStack>

        <Box display={'flex'} p={'0px 106px 4px 0px'} alignItems={'center'}>
            <Text fontSize={'40px'} fontWeight={700}> 3.85k</Text>

        </Box>
    </Box>

    <Box display={'flex'} w={'240px'} h={'132px'} p={'14px'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'} border={'1px solid black-trans-15'} borderRadius={'10px'} background={'#fff'}>
        <HStack display={'flex'} p={'4px 0px'} justifyContent={'space-between'} alignItems={'flex-start'} alignSelf={'stretch'}>
            <Text fontSize={'18px'} fontWeight={500}> Articles Written</Text>
           
        </HStack>

        <Box display={'flex'} p={'0px 106px 4px 0px'} alignItems={'center'}>
            <Text fontSize={'40px'} fontWeight={700}> 3</Text>

        </Box>
    </Box>

    <Box display={'flex'} w={'auto'} h={'132px'} p={'14px'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'} border={'1px solid black-trans-15'} borderRadius={'10px'} background={'#fff'}>
        <HStack display={'flex'} p={'4px 0px'} justifyContent={'space-between'} alignItems={'flex-start'} alignSelf={'stretch'}>
            <Text fontSize={'18px'} fontWeight={500}>Amount Earned</Text>
            <Box w={'99px'} display={'flex'} padding={'0px 12px'} justifyContent={'center'} alignItems={'center'} gap={'10px'} border={'1px solid black-trans-5'} borderRadius={'4px'} >
            <Select fontSize={'12px'} variant='outline' placeholder='All time' >
                <option value="Month">Month</option>

            </Select>

            </Box>
        </HStack>

        <Box display={'flex'} p={'0px 106px 4px 0px'} alignItems={'center'}>
            <Text fontSize={'40px'} fontWeight={700}> 3.85k</Text>

        </Box>
    </Box>

    <Box display={'flex'} w={'auto'} h={'132px'} p={'14px'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'} border={'1px solid black-trans-15'} borderRadius={'10px'} background={'#fff'}>
        <HStack display={'flex'} p={'4px 0px'} justifyContent={'space-between'} alignItems={'flex-start'} alignSelf={'stretch'}>
            <Text fontSize={'18px'} fontWeight={500}> Post Views</Text>
            <Box w={'99px'} display={'flex'} padding={'0px 12px'} justifyContent={'center'} alignItems={'center'} gap={'10px'} border={'1px solid black-trans-5'} borderRadius={'4px'} >
            <Select fontSize={'12px'} variant='outline' placeholder='All time' >
                <option value="Month">Month</option>

            </Select>

            </Box>
        </HStack>

        <Box display={'flex'} p={'0px 106px 4px 0px'} alignItems={'center'}>
            <Text fontSize={'40px'} fontWeight={700}> 3.85k</Text>

        </Box>
    </Box>
    </Box>

</Box>
   </DashboardLayout>
  )
}

export default Overview