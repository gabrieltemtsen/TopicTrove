import { fonts } from "@/lib/fonts";
import {
    ChakraProvider,
    StyleFunctionProps,
    ThemeConfig,
    extendTheme,
} from "@chakra-ui/react";
import { ReactNode } from "react";
const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    colors: {
        appGreen: "#06F2AB",
        "blackTrans-2": "rgba(0, 0, 0, 0.04)",
        "blackTrans-5": "rgba(0, 0, 0, 0.05)",
        "blackTrans-15": "rgba(0, 0, 0, 0.15)",
        appBlack: {
            50: "#f2f2f2",
            100: "#d9d9d9",
            200: "#bfbfbf",
            300: "#a6a6a6",
            400: "#8c8c8c",
            500: "#737373",
            600: "#595959",
            700: "#404040",
            800: "#262626",
            900: "#0d0d0d",
        },
    },
    baseStyle: {
        // fontWeight: 'medium', // Normally, it is "semibold"
    },
    fonts: {
        heading: "var(--font-poppins)",
        body: "var(--font-poppins)",
    },
    components: {
        Button: {
            //   // 3. We can add a new visual variant
            variants: {
                solid: {
                    bg: "appBlack.900",
                    color: "#fff",
                },
                outline: {
                    borderColor: "appBlack.900",
                    color: "appBlack.900",
                },
            },
            defaultProps: {
                // // size: 'lg', // default is md
                // variant: 'solid', // default is solid
                colorScheme: "appBlack",
            },
        },
    },
});

export default function MainChakraProvider({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-poppins: ${fonts.poppins.style.fontFamily};
                    }
                `}
            </style>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </>
    );
}
