import Presentation from "./Presentation"

interface InnerPageProps {

}

const InnerPage:React.FC<InnerPageProps> = ({}) => {
    return (
        <div className="innerPage">
            <Presentation/>
        </div>
    )
}

export default InnerPage