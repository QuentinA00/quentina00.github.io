import { AnimatePresence } from "framer-motion"
import AnimationWrapper from "../components/AnimationWrapper"
import { AppTextInterface } from "../interfaces/appTextInterfaces"
import ButtonWithIcon from "../components/ButtonWithIcon"

interface ContactProps{
    contactData:AppTextInterface['contact']
}

const Contact:React.FC<ContactProps> = ({contactData}) => {
    return (
        <div className="contact">
            <div className="contactItems">
                {/* <p>{contactData.text}</p> */}
                <ButtonWithIcon imageName={contactData.image} text={contactData.text}/>
                {/* <img src={'./assets/imgs/'+contactData.image} alt={contactData.text} /> */}
            </div>
        </div>
    )
}

export default Contact