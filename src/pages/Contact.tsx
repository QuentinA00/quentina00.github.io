import { AnimatePresence } from "framer-motion"
import AnimationWrapper from "../components/AnimationWrapper"
import { AppTextInterface } from "../interfaces/appTextInterfaces"

interface ContactProps{
    contactData:AppTextInterface['contact']
}

const Contact:React.FC<ContactProps> = ({contactData}) => {
    return (
        <div className="contact">
            <div className="contactItems">
                <p>{contactData.text}</p>
                <img src={'./assets/imgs/'+contactData.image} alt={contactData.text} />
            </div>
        </div>
    )
}

export default Contact