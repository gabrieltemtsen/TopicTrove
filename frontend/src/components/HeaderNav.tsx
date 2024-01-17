import { Button, Flex } from "@chakra-ui/react"
import Logo from "./Logo"
import Nav from "./Nav"

interface HeaderProps{
    bg?:string
}
export default function HeaderNav<HeaderProps>({bg='appGreen'}){

    return <Flex borderBottom={'1px'} borderBottomColor={'appBlack.900'} bg={bg} className="" px={8} py={4} align={'center'} justify={'space-between'}>
<Logo/>
<Nav/>
<Flex>
    <Button rounded={'full'} size={'lg'}>Connect Wallet</Button>
</Flex>
    </Flex>
}