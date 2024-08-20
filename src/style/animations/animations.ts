import { Variants } from "framer-motion";

export const pageTransitionInOut: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

// ----- testing out -----

export const slideInOut: Variants = {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
}

export const slideWithStagger: Variants = {
    initial: {
        x: '-100vw',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    exit: {
        x: '100vw',
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
}