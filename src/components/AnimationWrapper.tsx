import { motion, Variants } from "framer-motion"

interface AnimationWrapperProps {
    animationType?:Variants
    transitionDuration?:number
    children:React.ReactNode
}

const defaultPageAnimation:Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

const AnimationWrapper:React.FC<AnimationWrapperProps> = ({transitionDuration, animationType, children}) => {
    return (
        <motion.div
            variants={animationType ? animationType : defaultPageAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                duration:transitionDuration ? transitionDuration : 1,
                ease:'easeInOut'
            }}
        >
            <div className="animationWrapper">
                {children}
            </div>
        </motion.div>
    )
}

export default AnimationWrapper