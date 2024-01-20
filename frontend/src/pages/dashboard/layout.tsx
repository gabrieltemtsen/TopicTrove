import DashboardHeader from "@/components/DashboardHeader";
import DashboardSideBar from "@/components/DashboardSidebar";
import { Flex, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function DashboardLayout({children}:{children:ReactNode}){
    return <Flex h={'100dvh'} minH={'700px'} maxH={'830px'}>
  

<DashboardSideBar/>
<Stack ml={'260px'} flex={1} gap={0} h={'full'}>
    <DashboardHeader/>
    {children}
</Stack>
    
        </Flex>
}