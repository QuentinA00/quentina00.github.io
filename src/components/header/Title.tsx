import { Link } from "react-router-dom"
import { AppTextInterface } from "../../interfaces/appTextInterfaces"

interface TitleProps {
    titleText: AppTextInterface['title']
}

const Title:React.FC<TitleProps> = ({titleText}) => {
    return (
        <div className="title">
            <Link to='/'><h1>{titleText}</h1></Link>
        </div>
    )
}

export default Title