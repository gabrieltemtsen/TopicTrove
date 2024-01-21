import "@rainbow-me/rainbowkit/styles.css";

import MainChakraProvider from "@/providers/chakra";
import "@/styles/globals.css";
import "material-symbols/outlined.css";
import type { AppProps } from "next/app";
import { ConnectKitProvider, SIWESession } from "connectkit";
import { siweClient } from "@/utils/siweClient";
import {
  ConnectButton,
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { createConfig, WagmiConfig, configureChains } from "wagmi";
import { rainbowWeb3AuthConnector } from "./RainbowWeb3AuthConnector";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { rainbowWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { publicProvider } from "wagmi/providers/public";
import { Component, useState, useEffect } from "react";
import { PlaceholderComponent } from "./placeHolder";

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()],
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      //rainbowWallet({ projectId: "04309ed1007e77d1f119b85205bb779d", chains }),
      rainbowWeb3AuthConnector({ chains }),
      //metaMaskWallet({ projectId: "04309ed1007e77d1f119b85205bb779d", chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  const [selectedLoginMethod, setSelectedLoginMethod] = useState(null);
  return (
    <>
    <QueryClientProvider client={queryClient}></QueryClientProvider>
      {selectedLoginMethod === "social" && (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme()}
            modalSize="compact"
          >
            <MainChakraProvider>
              <Component {...pageProps} />
            </MainChakraProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      )}
      {selectedLoginMethod === "ethereum" && (
        <siweClient.Provider
          // Optional parameters
          enabled={true} // defaults true
          nonceRefetchInterval={300000} // in milliseconds, defaults to 5 minutes
          sessionRefetchInterval={300000} // in milliseconds, defaults to 5 minutes
          signOutOnDisconnect={true} // defaults true
          signOutOnAccountChange={true} // defaults true
          signOutOnNetworkChange={true} // defaults true
          //onSignIn={(session?: SIWESession)}
          //onSignOut={() => void}
        >
          <ConnectKitProvider>
            <MainChakraProvider>
              <Component {...pageProps} />
            </MainChakraProvider>
          </ConnectKitProvider>
        </siweClient.Provider>
      )}

      {selectedLoginMethod === null && (
        <PlaceholderComponent onLoginMethodSelected={setSelectedLoginMethod} />
      )}
    </>
  );
}

// import MainChakraProvider from "@/providers/chakra";
// import "@/styles/globals.css";
// import 'material-symbols/outlined.css'
// import type { AppProps } from "next/app";

// import { WagmiConfig, createConfig, configureChains, useAccount, useConnect, useDisconnect } from "wagmi";
// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import { mainnet, goerli, polygonMumbai } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";
// // import { SendTransaction } from "./sendTransaction";
// // import { NetworkSwitcher } from "./switchNetwork";
// import Web3AuthConnectorInstance from "./Web3AuthConnectorInstance";
// // import { Balance } from "./balance";
// // import { WriteContract } from "./writeContract";

// // Configure chains & providers with the Public provider.
// const { chains, publicClient, webSocketPublicClient } = configureChains([goerli, mainnet, polygonMumbai ], [publicProvider()]);

// import {
//     ConnectKitProvider,
//     ConnectKitButton,
//     getDefaultConfig,
// } from "connectkit";

// // Set up client
// const config = createConfig({
//     autoConnect: true,
//     connectors: [
//       new CoinbaseWalletConnector({
//         chains,
//         options: {
//           appName: "wagmi",
//         },
//       }),
//       new WalletConnectConnector({
//         chains,
//         options: {
//           projectId: process.env.WALLETCONNECT_PROJECT_ID as string,
//           showQrModal: true,
//         },
//       }),
//       new InjectedConnector({
//         chains,
//         options: {
//           name: "Injected",
//           shimDisconnect: true,
//         },
//       }),
//       Web3AuthConnectorInstance(chains) as any,
//     ],
//     publicClient,
//     webSocketPublicClient,
//   });

// // const config = createConfig(
// //     getDefaultConfig({
// //         // Required API Keys
// //         alchemyId: process.env.ALCHEMY_ID, // or infuraId
// //         walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID as string,

// //         // Required
// //         appName: "Your App Name",

// //         // Optional
// //         appDescription: "Your App Description",
// //         appUrl: "https://family.co", // your app's url
// //         appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
// //     })
// // );

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <WagmiConfig config={config}>
//             <ConnectKitProvider>
//                 <MainChakraProvider>
//                     <Component {...pageProps} />
//                 </MainChakraProvider>
//             </ConnectKitProvider>
//         </WagmiConfig>
//     );
// }
