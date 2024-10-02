import { AppTextInterface } from "../interfaces/appTextInterfaces"
import ButtonWithIcon from "../components/ButtonWithIcon"
import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../utils/responsiveUtils"

interface ContactProps{
    contactData:AppTextInterface['contact']
}

const Contact:React.FC<ContactProps> = ({contactData}) => {

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`contact ${isOnMobileScreen ? 'contact-mobile' : ''}`}>
            <div className="contactItems">
                <ButtonWithIcon imageName={contactData.image} text={contactData.text}/>
            </div>
        </div>
    )
}

export default Contact