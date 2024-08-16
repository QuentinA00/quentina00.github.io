interface PresentationProps {

}

const Presentation:React.FC<PresentationProps> = ({}) => {
    return (
        <div className="presentation">
            <div className="test">
                test.
            </div>
            <div className="text"></div>
            <div className="linkToResume">
                <a href="http://">Download CV</a>
            </div>
        </div>
    )
}

export default Presentation