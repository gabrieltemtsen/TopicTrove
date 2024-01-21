import { Box, Text } from "@chakra-ui/react";

export default function MatIcon({name,size=24,bold=false}:{name:string,size?:number,bold?:boolean}){
    //@ts-ignore

    return  <Text as={'span'} fontSize={size+'px'}  className={`material-symbols-outlined ${bold?'bold':''}`}>{name}</Text>
    

}