import * as React from 'react'
import classNames from 'clsx'
import { motion } from 'framer-motion'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/design'
import { useSignMessage } from 'wagmi'

export const SignMessage = ({ className }) => {
  const classes = classNames(className, 'SignMessage', 'container mx-auto max-w-screen-xl')

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'gm wagmi frens',
  })

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
                <motion.h1 className="slide-title" variants={FADE_DOWN_ANIMATION_VARIANTS}>
                  Sign Message
                </motion.h1>

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
              <button className="btn btn-primary" onClick={() => signMessage()}>
                Sign Message
              </button>
            </motion.div>
            <div className="mt-10">
              {isSuccess && (
                <div className="break-all">
                  Signature
                  <br /> {data}
                </div>
              )}
              {isError && <div>Error signing message</div>}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SignMessage
