import * as React from 'react'
import classNames from 'clsx'
import { motion } from 'framer-motion'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/design'

export const SignInWithEthereum = ({ className }) => {
  const classes = classNames(className, 'SignInWithEthereum', 'container mx-auto max-w-screen-xl')
  return (
    <div className={classes}>
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
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6 text-sm text-left flex flex-col justify-center">
            <div className="">
              <motion.div className="mx-auto mt-6 " variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <motion.h3
                  className="font-display font-bold bg-gradient-to-br from-black to-stone-500 bg-clip-text text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm dark:from-stone-100 dark:to-yellow-200 md:text-5xl md:leading-[6rem]"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}>
                  SIWE
                </motion.h3>
                <motion.h3 className="text-xl font-light" variants={FADE_DOWN_ANIMATION_VARIANTS}>
                  Sign-In With Ethereum
                </motion.h3>

                <p className="">
                  Vestibulum ac lacinia nulla, sit amet pulvinar enim. Duis pretium tortor et purus vulputate feugiat. Nunc in semper orci. Cras
                  commodo, elit at faucibus.
                </p>

                <p className="">
                  Donec sodales lobortis quam, accumsan dictum mauris cursus et. Proin sodales diam sed congue vulputate. Nam molestie fringilla
                  tristique.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="col-span-6 items-center flex flex-col justify-center">
            <motion.div className="mx-auto mt-6 " variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <button className="btn btn-green">Sign Message</button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SignInWithEthereum
