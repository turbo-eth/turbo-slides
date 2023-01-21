const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /icon/,
      use: ['@svgr/webpack'],
    })
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/icon/] },
      loader: 'next-image-loader',
      options: { assetPrefix: '' },
    })
    return config
  },
})
