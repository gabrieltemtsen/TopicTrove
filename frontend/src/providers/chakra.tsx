import { ChakraProvider, StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

export const theme = extendTheme({
    colors:{
        'appGreen':'#06F2AB',
        appBlack:{
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
  
        }
    },
    
  components: {
    Button: {
   
    //   // 3. We can add a new visual variant
      variants: {
        solid: {
          bg: 'appBlack.900',
          color:"#fff"
        },
     
      },
      defaultProps: {
        // size: 'lg', // default is md
        // variant: 'solid', // default is solid
        colorScheme: 'appBlack',
      },
    },
  },
})


  
export default function MainChakraProvider({children}:{children:ReactNode}){
    return  <ChakraProvider>
    {children}
  </ChakraProvider>
}