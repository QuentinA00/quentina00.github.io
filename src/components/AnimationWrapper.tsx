import { motion, Variants } from "framer-motion"
import { zoomEffect } from "../style/animations/animations"

interface AnimationWrapperProps {
    children:React.ReactNode
    animationType?:Variants
    transitionDuration?:number
    className?:string
}

const AnimationWrapper:React.FC<AnimationWrapperProps> = ({transitionDuration, animationType, children, className}) => {

    return (
        <motion.div
            variants={animationType ? animationType : zoomEffect}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                duration:transitionDuration ? transitionDuration : .25,
                ease:'easeInOut'
            }}
            className={`animationWrapper ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper