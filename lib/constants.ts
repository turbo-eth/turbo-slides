import { arbitrum, goerli, hardhat, mainnet, optimism, polygon, sepolia } from '@wagmi/chains'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Application
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const SITE_CANONICAL = 'https://turbo.district.dev'
export const SITE_EMOJI = '⚡'
export const SITE_NAME = 'TurboSlides'
export const SITE_TAGLINE = 'Supercharged Presentations'
export const SITE_TITLE = 'TurboSlides - Web3 Presentation Tool'
export const SITE_DESCRIPTION = 'Slide Decks with Web3 Capabilities'
export const SOCIAL_TWITTER = 'KamesGeraghty'
export const SOCIAL_GITHUB = 'turbo-eth/turbo-slides'

export const AUTHOR_NAME = '@KamesGeraghty'
export const AUTHOR_URL = 'https://twitter.com/KamesGeraghty'
export const AUTHOR_IMAGE_URL = 'https://pbs.twimg.com/profile_images/1614629077276663813/-D_dYj9i_400x400.jpg'

export const PRESENTATION_DATE = 'Q1 2023'
export const PRESENTATION_MODES = {
  SLIDESHOW: 'slideshow',
  SPEAKER: 'speaker',
}

export const APP_CONFIG = {
  canonical: SITE_CANONICAL,
  emoji: SITE_EMOJI,
  title: SITE_TITLE,
  site_name: SITE_NAME,
  description: SITE_DESCRIPTION,
  previewImg: `${SITE_CANONICAL}/preview.png`,
  locale: 'en',
  twitter: SOCIAL_TWITTER,
}

export const DEPLOY_URL =
  'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=APP_ADMINS,NEXT_PUBLIC_ALCHEMY_API_KEY,NEXTAUTH_SECRET,ETHERSCAN_API_KEY,ETHERSCAN_API_KEY_OPTIMISM,ETHERSCAN_API_KEY_ARBITRUM,ETHERSCAN_API_KEY_POLYGON,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fmain%2F.env.example'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Design
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const THEME_INITIAL_COLOR = 'system'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Blockchain
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Override the default Goerli icon so it's not the same as the default Ethereum icon

// @ts-ignore
goerli.iconUrl = '/icons/NetworkEthereumTest.svg'
// @ts-ignore
sepolia.iconUrl = '/icons/NetworkEthereumTest.svg'

export const ETH_CHAINS = [mainnet, polygon, optimism, arbitrum, goerli]
export const ETH_CHAINS_PROD = [mainnet, polygon, optimism, arbitrum]
export const ETH_CHAINS_TEST = [mainnet, polygon, optimism, arbitrum, goerli, sepolia, hardhat]
