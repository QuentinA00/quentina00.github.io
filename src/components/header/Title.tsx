import { AppTextInterface } from "../../interfaces/appTextInterfaces"

interface TitleProps {
    titleText: AppTextInterface['title']
    setMenuBarSelectedElement: (id:null) => void
}

const Title:React.FC<TitleProps> = ({titleText, setMenuBarSelectedElement}) => {
    return (
        <div className="title" onClick={() => setMenuBarSelectedElement(null)}>
            <h1>{titleText}</h1>
        </div>
    )
}

export default Title