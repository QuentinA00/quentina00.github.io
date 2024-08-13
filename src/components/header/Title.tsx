import { AppTextInterface } from "../../interfaces/appTextInterfaces"

interface TitleInterface {
    titleText: AppTextInterface['title']
}

const Title:React.FC<TitleInterface> = ({titleText}) => {
    return (
        <div className="title">
            <h1>{titleText}</h1>
        </div>
    )
}

export default Title