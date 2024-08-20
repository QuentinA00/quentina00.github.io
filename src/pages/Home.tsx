import { AppTextInterface } from "../interfaces/appTextInterfaces"
import InnerPage from "../components/innerPages/InnerPage"
import { motion } from 'framer-motion'
import { slideWithStagger } from "../style/animations/animations"

interface HomeProps {
    appText:AppTextInterface
}

const Home:React.FC<HomeProps> = ({appText}) => {
    return (
        <motion.div
            variants={slideWithStagger}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <div className='home'>
                <InnerPage appText={appText}/>
            </div>
        </motion.div>
    )
}

export default Home