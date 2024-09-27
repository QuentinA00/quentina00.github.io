import { AppTextInterface } from "../../interfaces/appTextInterfaces"

interface PresentationProps {
    presentationText:AppTextInterface['presentation']
}

const Presentation:React.FC<PresentationProps> = ({presentationText}) => {
    return (
        <div className="presentation">
            <div className="sectionBorder"></div>
            <div className="presentationElements">
                <h2 className="presentationTitle">{presentationText.title}</h2>
                <div className="presentationItems">
                    <div className="presentationText">{presentationText.presentationText}</div>
                    <a href={presentationText.linkSection.linkUrl} className="regularLink">{presentationText.linkSection.linkText}</a>
                </div>
            </div>
        </div>
    )
}

export default Presentation