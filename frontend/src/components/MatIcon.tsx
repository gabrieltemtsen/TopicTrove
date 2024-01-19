import { Box, Text } from "@chakra-ui/react";

export default function MatIcon({name,size=24}:{name:string,size?:number}){
    //@ts-ignore

    return  <Text as={'span'} fontSize={size+'px'}  className="material-symbols-outlined">{name}</Text>
    

}