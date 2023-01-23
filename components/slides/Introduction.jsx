import * as React from 'react'
import classNames from 'clsx'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants'
import { BranchColorMode } from '@/components/branch/BranchColorMode'
import { DEPLOY_URL } from '@/lib/constants'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_LG_ANIMATION_VARIANTS } from '@/lib/design'
import { motion } from 'framer-motion'
import { WalletConnect } from '@/components/web3/WalletConnect'

export const Introduction = ({ className }) => {
  const classes = classNames(className, 'Introduction', 'container mx-auto max-w-screen-xl', 'flex flex-col text-left min-h-[70vh]')
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className={classes}>
        <div className="mt-20">
          <h3 className="font-bold font-raleway text-6xl leading-tight">{SITE_NAME}</h3>
          <h3 className="font-medium font-raleway text-3xl">{SITE_DESCRIPTION} </h3>
        </div>
        <div className="flex-1 flex flex-col flex-center justify-center">
          <motion.div className="mt-6 flex items-center gap-x-5 z-10" variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              href={DEPLOY_URL}
              target="_blank"
              rel="noopener noreferrer">
              <svg className="h-4 w-4 group-hover:text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L20 20H4L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Deploy to Vercel</span>
            </a>
            <a
              className="flex max-w-fit cursor-pointer items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
              href="https://github.com/turbo-eth/turbo-slides"
              target="_blank"
              rel="noopener noreferrer">
              <span>Star on GitHub</span>
            </a>
          </motion.div>
        </div>
        <div className="text-left">
          <h3 className="font-normal text-lg">
            <a className="link" href="https://districtlabs.com">
              Designed and Developed at District Labs
            </a>
          </h3>
          <h3 className="font-raleway text-lg">Kames Geraghty | CTO</h3>
        </div>
      </motion.div>
      <div className="absolute top-20 right-32">
        <motion.div variants={FADE_UP_LG_ANIMATION_VARIANTS}>
          <div className="w-[225%] max-w-[225%] -rotate-12">
            <BranchColorMode>
              <img src="/icon-dark.svg" alt="TurboSlides by District Labs" className="w-full h-auto opacity-10" />
              <img src="/district.svg" alt="TurboSlides by District Labs" className="w-full h-auto opacity-40" />
            </BranchColorMode>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Introduction
