import { ReactNode } from 'react'

import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit'
import { coinbaseWallet, injectedWallet, metaMaskWallet, rainbowWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'
import { WagmiConfig, configureChains, createClient } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

import { ETH_CHAINS_PROD, ETH_CHAINS_TEST } from '@/lib/constants'

interface Props {
  children: ReactNode
  autoConnect?: boolean
}

const CHAINS = process.env.NODE_ENV === 'production' ? ETH_CHAINS_PROD : ETH_CHAINS_TEST
const { chains, provider, webSocketProvider } = configureChains(CHAINS, [
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string,
  }),
  jsonRpcProvider({
    rpc: () => ({
      chainId: [11155111],
      http: 'https://sepolia.infura.io/v3/',
    }),
  }),
  jsonRpcProvider({
    rpc: () => ({
      chainId: [31337],
      http: 'http://127.0.0.1:8545/',
    }),
  }),
])

const appInfo = {
  appName: 'TurboSlides',
}

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      coinbaseWallet({ chains, appName: appInfo.appName }),
      walletConnectWallet({ chains }),
    ],
  },
])

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
})

export function RainbowKit(props: Props) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={appInfo} chains={chains}>
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
