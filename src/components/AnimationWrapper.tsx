import { motion, Variants } from "framer-motion"
import { zoomEffect } from "../style/animations/animations"

interface AnimationWrapperProps {
    children?:React.ReactNode
    animationType?:Variants
    transitionDuration?:number
    className?:string
}

// const defaultPageAnimation:Variants = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
// }

const AnimationWrapper:React.FC<AnimationWrapperProps> = ({transitionDuration, animationType, children, className}) => {
    return (
        <motion.div
            variants={animationType ? animationType : zoomEffect}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                duration:transitionDuration ? transitionDuration : .2,
                ease:'easeInOut'
            }}
            className={`animationWrapper ${className}`}
        >
            {children && children}
        </motion.div>
    )
}

export default AnimationWrapper