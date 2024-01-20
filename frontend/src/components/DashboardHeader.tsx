import { Avatar, Button, Flex, HStack } from "@chakra-ui/react";
import MatIcon from "./MatIcon";

export default function DashboardHeader(){
    return <Flex justify={'flex-end'} py={3} borderBottom={'1px'} borderBottomColor={'blackTrans-15'}>
        <HStack pr={4} gap={4}>
            <Button size={'sm'} color='red.500' borderColor={'currentColor'} variant='outline' gap={3} rounded={'full'}><MatIcon name="logout"/> Logout</Button>
<Avatar size={'sm'} src="https://bit.ly/code-beast"/>
        </HStack>
    </Flex>
}