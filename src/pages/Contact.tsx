import { AnimatePresence } from "framer-motion"
import AnimationWrapper from "../components/AnimationWrapper"
import { AppTextInterface } from "../interfaces/appTextInterfaces"

interface ContactProps{
    contactData:AppTextInterface['contact']
}

const Contact:React.FC<ContactProps> = ({contactData}) => {
    return (
        // <AnimationWrapper className="contact">
        <div className="contact">
            <p>{contactData.text}</p>
            <img src={'./assets/imgs/'+contactData.image} alt={contactData.text} />

        </div>
        // </AnimationWrapper>
    )
}

export default Contact