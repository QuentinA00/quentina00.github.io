import { Link } from "react-router-dom"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"
import { useMediaQuery } from "react-responsive"
import { screen_mobile } from "../../utils/responsiveUtils"

interface TitleProps {
    titleText: AppTextInterface['title']
}

const Title:React.FC<TitleProps> = ({titleText}) => {

    const mobileScreen = useMediaQuery({maxWidth:screen_mobile})

    return (
        <div className={`title ${mobileScreen ? 'title-mobile' : ''}`}>
            <Link to='/'><h1>{titleText}</h1></Link>
        </div>
    )
}

export default Title