'use client'

import {motion, AnimatePresence} from 'framer-motion'


export const Animations = ({children}: any) => {
    return <>
        <AnimatePresence>
            <motion.div initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 15}}
                        transition={{delay: 0.25}}

            >
                {children}
            </motion.div>
        </AnimatePresence>

    </>
}


const animatedContainer = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    }
};

export const AnimatedList = ({children}: any) => (
    <motion.div
        className=""
        variants={animatedContainer}
        initial="hidden"
        animate="visible"
    >
        {children}
    </motion.div>
);
