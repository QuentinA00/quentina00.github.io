import { motion, Variants } from "framer-motion"

interface AnimationWrapperProps {
    animationType:Variants
}

const AnimationWrapper:React.FC<AnimationWrapperProps> = ({animationType}) => {
    return (
        <motion.div
            variants={animationType}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration:1}}
        >
            <div className="animationWrapper">
                
            </div>
        </motion.div>
    )
}

export default AnimationWrapper