import { AppTextProps } from "../../interfaces/globalPropsInterfaces"
import Presentation from "./Presentation"

interface InnerPageProps {

}

const InnerPage:React.FC<InnerPageProps & AppTextProps> = ({appText}) => {
    return (
        <div className="innerPage">
            <Presentation presentationText={appText.presentation} />
        </div>
    )
}

export default InnerPage