import * as React from 'react'
import classNames from 'clsx'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants'
import { BranchColorMode } from '@/components/branch/BranchColorMode'
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
          <WalletConnect />
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
