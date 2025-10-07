import ButtonWithIcon from "../components/ButtonWithIcon"
import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../utils/responsiveUtils"
import { useLanguage } from "../contexts/LanguageContextProvider"

const Contact = () => {

    const isOnMobileScreen = useMediaQuery({maxWidth:screen_mobile})

    const {appText} = useLanguage()
    const contactText = appText.contact

    return (
        <div className={`contact ${isOnMobileScreen ? 'contact-mobile' : ''}`}>
            <div className="contactItems">
                <ButtonWithIcon imageName={contactText.image} text={contactText.text}/>
            </div>
        </div>
    )
}

export default Contact